import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { normalize } from 'normalizr';
import { postListSchema, postSchema } from '../../normalizr/schemas/post-schema';
import NormalizedData from '../../normalizr/types/normalized-data';
import * as postActions from '../actions/post.actions';
import { PageResult } from '../../types/pagination/page-result';
import { GetPosts, GetSinglePost } from '../actions/post.actions';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.GET_POSTS),
      switchMap((action: GetPosts) =>
        this.api.getPosts(action.pageRequest).pipe(
          map((pageResult) => normalize(pageResult, postListSchema)),
          map((data: NormalizedData<PageResult<number>>) => new postActions.GetPostsSuccess(data)),
          catchError((error) => of(new postActions.GetPostsFailed(error))),
        ),
      ),
    ),
  );

  getSinglePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.GET_SINGLE_POST),
      switchMap((action: GetSinglePost) =>
        this.api.getSinglePost(action.id).pipe(
          map((post) => normalize(post, postSchema)),
          map((data: NormalizedData<number>) => new postActions.GetSinglePostSuccess(data)),
          catchError((error) => of(new postActions.GetSinglePostFailed(error))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
