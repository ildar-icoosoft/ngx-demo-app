import { PayloadAction } from '../../../../core/ngrx-store/types/payload-action';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import * as userActions from '../../../../core/ngrx-store/actions/user.actions';
import { PageResult } from '../../../../core/types/pagination/page-result';

export const userListFeatureKey = 'userList';

export type UserListState = number[];

export const initialState: UserListState = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): UserListState {
  switch (action.type) {
    case userActions.GET_USERS_SUCCESS:
      const data = action.payload as NormalizedData<PageResult<number>>;

      return data.result.items;

    default:
      return state;
  }
}
