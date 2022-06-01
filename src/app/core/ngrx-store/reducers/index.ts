import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';
import * as fromEntities from './entities.reducer';
import * as fromCurrentActions from './current-actions.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromEntities.entitiesFeatureKey]: fromEntities.EntitiesState;
  [fromCurrentActions.currentActionsFeatureKey]: fromCurrentActions.CurrentActionsState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromEntities.entitiesFeatureKey]: fromEntities.reducer,
  [fromCurrentActions.currentActionsFeatureKey]: fromCurrentActions.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
