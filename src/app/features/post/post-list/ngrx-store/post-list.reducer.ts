import { PayloadAction } from '../../../../core/ngrx-store/types/payload-action';
import * as postActions from '../../../../core/ngrx-store/actions/post.actions';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';

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
export function reducer(state = postListInitialState, action: PayloadAction<any>): PostListState {
  switch (action.type) {
    case postActions.GET_POSTS_SUCCESS:
      const data = action.payload as NormalizedData<PageResult<number>>;

      return data.result;

    default:
      return state;
  }
}
