import * as userActions from '../../../../core/ngrx-store/actions/user.actions';
import { GetUsersSuccess } from '../../../../core/ngrx-store/actions/user.actions';
import { Action } from '@ngrx/store';

export const userListFeatureKey = 'userList';

export type UserListState = number[];

export const initialState: UserListState = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: Action): UserListState {
  switch (action.type) {
    case userActions.GET_USERS_SUCCESS:
      const getUsersSuccessAction = action as GetUsersSuccess;

      return getUsersSuccessAction.data.result.items;

    default:
      return state;
  }
}
