import * as postActions from '../../../../core/ngrx-store/actions/post.actions';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { GetPostsSuccess } from '../../../../core/ngrx-store/actions/post.actions';
import { Action } from '@ngrx/store';

export const postListFeatureKey = 'postList';

export type PostListState = PageResult<number>;

export const postListPageSize = 5;

export const postListDefaultPageRequest: PageRequest = {
  page: {
    number: 1,
    size: postListPageSize,
  },
  sort: {
    field: 'id',
    direction: 'asc',
  },
};

export const postListInitialState: PostListState = {
  pageRequest: postListDefaultPageRequest,
  totalCount: 0,
  items: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = postListInitialState, action: Action): PostListState {
  switch (action.type) {
    case postActions.GET_POSTS_SUCCESS:
      const getPostsSuccessAction = action as GetPostsSuccess;

      return getPostsSuccessAction.data.result;

    default:
      return state;
  }
}
