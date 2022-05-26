import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currentActionsFeatureKey, CurrentActionsState } from '../reducers/current-actions.reducer';

export const selectCurrentActionsState =
  createFeatureSelector<CurrentActionsState>(currentActionsFeatureKey);

export const selectIsActionInProcess = (actionType: string) =>
  createSelector(selectCurrentActionsState, (state): boolean => {
    return state.includes(actionType);
  });
