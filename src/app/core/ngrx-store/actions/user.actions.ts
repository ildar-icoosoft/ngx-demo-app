import { StartOfAction } from '../decorators/start-of-action';
import { Action } from '@ngrx/store';
import { EndOfAction } from '../decorators/end-of-action';
import { ReturnsNormalizedData } from '../decorators/returns-normalized-data';
import NormalizedData from '../../normalizr/types/normalized-data';

/* GetUsers */
export const GET_USERS = '[User] GetUsers';
export const GET_USERS_SUCCESS = '[User] GetUsersSuccess';
export const GET_USERS_FAILURE = '[User] GetUsersFailure';

@StartOfAction()
export class GetUsers implements Action {
  readonly type = GET_USERS;
}

@EndOfAction(GET_USERS)
@ReturnsNormalizedData()
export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  constructor(public payload?: NormalizedData<number[]>) {}
}

@EndOfAction(GET_USERS)
export class GetUsersFailure implements Action {
  readonly type = GET_USERS_FAILURE;

  constructor(public payload?: any) {}
}

export type UserAction = GetUsers | GetUsersSuccess | GetUsersFailure;
