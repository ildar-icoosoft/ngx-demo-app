import { Action } from '@ngrx/store';
import NormalizedData from '../../normalizr/types/normalized-data';

export interface ActionWithNormalizedData extends Action {
  data: NormalizedData<any>;
}
