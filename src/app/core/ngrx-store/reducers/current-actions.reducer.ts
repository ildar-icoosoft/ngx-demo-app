import {
  END_ACTION,
  EndAction,
  START_ACTION,
  StartAction,
} from '../actions/current-action.actions';
import { Action } from '@ngrx/store';

export const currentActionsFeatureKey = 'currentActions';

export type CurrentActionsState = string[];

export const initialState: CurrentActionsState = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: Action): string[] {
  switch (action.type) {
    case START_ACTION:
      const startAction = action as StartAction;
      return [...state, startAction.startActionType];

    case END_ACTION:
      const endAction = action as EndAction;
      return state.filter((item) => item !== endAction.endActionType);

    default:
      return state;
  }
}
