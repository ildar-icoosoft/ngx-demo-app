import { Action } from '@ngrx/store';
import { ReturnsNormalizedData } from '../decorators/returns-normalized-data';
import { StartOfAction } from '../decorators/start-of-action';
import { EndOfAction } from '../decorators/end-of-action';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';
import { Pageable } from '../../types/pagination/pageable';

/* GetPosts */
export const GET_POSTS = '[Post] GetPosts';
export const GET_POSTS_SUCCESS = '[Post] GetPostsSuccess';
export const GET_POSTS_FAILURE = '[Post] GetPostsFailure';

@StartOfAction()
export class GetPosts implements Action {
  readonly type = GET_POSTS;

  constructor(public payload: Pageable) {}
}

@EndOfAction(GET_POSTS)
@ReturnsNormalizedData()
export class GetPostsSuccess implements Action {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public payload: NormalizedData<PageResult<number>>) {}
}

@EndOfAction(GET_POSTS)
export class GetPostsFailure implements Action {
  readonly type = GET_POSTS_FAILURE;

  constructor(public payload?: any) {}
}

export type PostAction = GetPosts | GetPostsSuccess | GetPostsFailure;
