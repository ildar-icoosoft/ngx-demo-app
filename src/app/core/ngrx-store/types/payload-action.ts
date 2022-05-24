import { Action } from '@ngrx/store';

// FSA-compliant action.
// See: https://github.com/acdlite/flux-standard-action
export interface PayloadAction<Payload> extends Action {
  payload: Payload;
  error?: boolean;
  meta?: any;
}
