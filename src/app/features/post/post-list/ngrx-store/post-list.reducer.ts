import { PayloadAction } from '../../../../core/ngrx-store/types/payload-action';
import * as postActions from '../../../../core/ngrx-store/actions/post.actions';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { PageResult } from '../../../../core/types/pagination/page-result';

export const postListFeatureKey = 'postList';

export type PostListState = PageResult<number>;

export const initialState: PostListState = {
  page: {
    number: 1,
    size: 5,
  },
  sort: {
    field: 'id',
    direction: 'asc',
  },
  totalCount: 0,
  items: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): PostListState {
  switch (action.type) {
    case postActions.GET_POSTS_SUCCESS:
      const data = action.payload as NormalizedData<PageResult<number>>;

      return data.result;

    default:
      return state;
  }
}
