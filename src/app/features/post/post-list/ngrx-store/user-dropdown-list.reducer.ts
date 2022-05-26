import { PayloadAction } from '../../../../core/ngrx-store/types/payload-action';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import * as userActions from '../../../../core/ngrx-store/actions/user.actions';

export const userDropdownListFeatureKey = 'userDropdownList';

export type UserDropdownListState = number[];

export const initialState: UserDropdownListState = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): UserDropdownListState {
  switch (action.type) {
    case userActions.GET_USERS_SUCCESS:
      const data = action.payload as NormalizedData<number[]>;

      return data.result;

    default:
      return state;
  }
}
