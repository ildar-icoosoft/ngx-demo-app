import { StartOfAction } from '../decorators/start-of-action';
import { Action } from '@ngrx/store';
import { EndOfAction } from '../decorators/end-of-action';
import { ReturnsNormalizedData } from '../decorators/returns-normalized-data';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';
import { ActionWithNormalizedData } from '../types/action-with-normalized-data';

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
export class GetUsersSuccess implements ActionWithNormalizedData {
  readonly type = GET_USERS_SUCCESS;

  constructor(public data: NormalizedData<PageResult<number>>) {}
}

@EndOfAction(GET_USERS)
export class GetUsersFailure implements Action {
  readonly type = GET_USERS_FAILURE;

  constructor(public error: any) {}
}

export type UserAction = GetUsers | GetUsersSuccess | GetUsersFailure;
