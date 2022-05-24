import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromEntities from './entities.reducer';
import { PayloadAction } from '../types/payload-action';
import * as fromCurrentActions from './current-actions.reducer';

export interface State {
  [key: string]: any;
  [fromEntities.entitiesFeatureKey]: fromEntities.EntitiesState;
  [fromCurrentActions.currentActionsFeatureKey]: fromCurrentActions.CurrentActionsState;
}

export const reducers: ActionReducerMap<State, PayloadAction<any>> = {
  [fromEntities.entitiesFeatureKey]: fromEntities.reducer,
  [fromCurrentActions.currentActionsFeatureKey]: fromCurrentActions.reducer,
};

export const metaReducers: MetaReducer<State, PayloadAction<any>>[] = !environment.production
  ? []
  : [];
