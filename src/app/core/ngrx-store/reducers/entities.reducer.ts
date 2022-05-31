import * as entityActions from '../actions/entity.actions';
import { NormalizedUserEntity } from '../../normalizr/types/models/normalized-user-entity';
import { NormalizedPostEntity } from '../../normalizr/types/models/normalized-post-entity';
import { Action } from '@ngrx/store';
import { EntityAction } from '../actions/entity.actions';
import { HashMap } from '../../types/hash-map';

export const entitiesFeatureKey = 'entities';

export interface EntitiesState {
  users: HashMap<NormalizedUserEntity>;
  posts: HashMap<NormalizedPostEntity>;
}

export const initialState: EntitiesState = {
  users: {},
  posts: {},
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: Action): EntitiesState {
  switch (action.type) {
    case entityActions.GET_ENTITIES_SUCCESS:
      const getEntityAction = action as EntityAction;
      return {
        users: Object.assign({}, state.users, getEntityAction.entities['users']),
        posts: Object.assign({}, state.posts, getEntityAction.entities['posts']),
      };

    default:
      return state;
  }
}
