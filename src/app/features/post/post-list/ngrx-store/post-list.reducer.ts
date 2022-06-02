import * as postActions from '../../../../core/ngrx-store/actions/post.actions';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { GetPostsSuccess } from '../../../../core/ngrx-store/actions/post.actions';
import { Action } from '@ngrx/store';

export const postListFeatureKey = 'postList';

export type PostListState = PageResult<number>;

export const postListInitialState: PostListState = {
  pageRequest: {},
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
