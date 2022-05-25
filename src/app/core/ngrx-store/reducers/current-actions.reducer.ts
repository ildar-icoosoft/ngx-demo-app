import { PayloadAction } from '../types/payload-action';
import { END_ACTION, START_ACTION } from '../actions/current-action.actions';

export const currentActionsFeatureKey = 'currentActions';

export type CurrentActionsState = string[];

export const initialState: CurrentActionsState = [];

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): string[] {
  switch (action.type) {
    case START_ACTION:
      const startActionType = action.payload as string;

      return [...state, startActionType];

    case END_ACTION:
      const endActionType = action.payload as string;

      return state.filter((item) => item !== endActionType);

    default:
      return state;
  }
}
