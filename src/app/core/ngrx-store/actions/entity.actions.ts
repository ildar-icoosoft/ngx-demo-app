import { Action } from '@ngrx/store';
import { Entities } from '../../normalizr/types/entites';

/* GetEntities */
export const GET_ENTITIES_SUCCESS = '[Entity] GetEntitiesSuccess';

export class GetEntitiesSuccess implements Action {
  readonly type = GET_ENTITIES_SUCCESS;

  constructor(public payload: Partial<Entities>) {}
}

export type EntityAction = GetEntitiesSuccess;
