import { createFeatureSelector } from '@ngrx/store';
import { entitiesFeatureKey, EntitiesState } from '../reducers/entities.reducer';

export const selectEntities = createFeatureSelector<EntitiesState>(entitiesFeatureKey);
