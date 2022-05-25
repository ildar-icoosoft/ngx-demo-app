import { PayloadAction } from '../../../../core/ngrx-store/types/payload-action';
import * as postListActions from '../../../../core/ngrx-store/actions/post.actions';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { PageResult } from '../../../../core/types/pagination/page-result';

export const postListFeatureKey = 'postList';

export type PostListState = PageResult<number>;

export const initialState: PostListState = {
  currentPage: 1,
  totalItems: 0,
  totalPages: 0,
  items: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): PostListState {
  switch (action.type) {
    case postListActions.GET_POSTS_SUCCESS:
      const data = action.payload as NormalizedData<PageResult<number>>;

      return data.result;

    default:
      return state;
  }
}
