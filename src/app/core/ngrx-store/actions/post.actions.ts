import { Action } from '@ngrx/store';
import { ReturnsNormalizedData } from '../decorators/returns-normalized-data';
import { StartOfAction } from '../decorators/start-of-action';
import { EndOfAction } from '../decorators/end-of-action';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';
import { PageRequest } from '../../types/pagination/page-request';
import { ActionWithNormalizedData } from '../types/action-with-normalized-data';

/* GetPosts */
export const GET_POSTS = '[Post] GetPosts';
export const GET_POSTS_SUCCESS = '[Post] GetPostsSuccess';
export const GET_POSTS_FAILED = '[Post] GetPostsFailed';

@StartOfAction()
export class GetPosts implements Action {
  readonly type = GET_POSTS;

  constructor(public pageRequest: PageRequest) {}
}

@EndOfAction(GET_POSTS)
@ReturnsNormalizedData()
export class GetPostsSuccess implements ActionWithNormalizedData {
  readonly type = GET_POSTS_SUCCESS;

  constructor(public data: NormalizedData<PageResult<number>>) {}
}

@EndOfAction(GET_POSTS)
export class GetPostsFailed implements Action {
  readonly type = GET_POSTS_FAILED;

  constructor(public error: any) {}
}

/* GetSinglePost */
export const GET_SINGLE_POST = '[Post] GetSinglePost';
export const GET_SINGLE_POST_SUCCESS = '[Post] GetSinglePostSuccess';
export const GET_SINGLE_POST_FAILED = '[Post] GetSinglePostFailed';

@StartOfAction()
export class GetSinglePost implements Action {
  readonly type = GET_SINGLE_POST;

  constructor(public id: number) {}
}

@EndOfAction(GET_SINGLE_POST)
@ReturnsNormalizedData()
export class GetSinglePostSuccess implements ActionWithNormalizedData {
  readonly type = GET_SINGLE_POST_SUCCESS;

  constructor(public data: NormalizedData<number>) {}
}

@EndOfAction(GET_SINGLE_POST)
export class GetSinglePostFailed implements Action {
  readonly type = GET_SINGLE_POST_FAILED;

  constructor(public error: any) {}
}

export type PostAction =
  | GetPosts
  | GetPostsSuccess
  | GetPostsFailed
  | GetSinglePost
  | GetSinglePostSuccess
  | GetSinglePostFailed;
