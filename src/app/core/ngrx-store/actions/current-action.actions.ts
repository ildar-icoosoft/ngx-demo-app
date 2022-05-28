import { Action } from '@ngrx/store';

export const START_ACTION = '[CurrentAction] StartAction';

export class StartAction implements Action {
  readonly type = START_ACTION;

  constructor(public startActionType: string) {}
}

export const END_ACTION = '[CurrentAction] EndAction';

export class EndAction implements Action {
  readonly type = END_ACTION;

  constructor(public endActionType: string) {}
}

export type CurrentActionAction = StartAction | EndAction;
