import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { normalize } from 'normalizr';
import { postListSchema } from '../../normalizr/schemas/post-schema';
import NormalizedData from '../../normalizr/types/normalized-data';
import * as postActions from '../actions/post.actions';
import { PageResult } from '../../types/pagination/page-result';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postActions.GET_POSTS),
      switchMap(({ payload }) =>
        this.api.getPostListPage(payload).pipe(
          map((pageResult) => normalize(pageResult, postListSchema)),
          map((data: NormalizedData<PageResult<number>>) => new postActions.GetPostsSuccess(data)),
          catchError((error) => of(new postActions.GetPostsFailure(error))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
