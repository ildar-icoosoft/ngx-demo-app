import * as entityActions from '../actions/entity.actions';
import { PayloadAction } from '../types/payload-action';
import { Entities } from '../../normalizr/types/entites';
import { NormalizedUserEntity } from '../../normalizr/types/models/normalized-user-entity';
import { NormalizedPostEntity } from '../../normalizr/types/models/normalized-post-entity';

export const entitiesFeatureKey = 'entities';

export interface EntitiesState {
  users: Record<string, NormalizedUserEntity>;
  posts: Record<string, NormalizedPostEntity>;
}

export const initialState: EntitiesState = {
  users: {},
  posts: {},
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export function reducer(state = initialState, action: PayloadAction<any>): EntitiesState {
  switch (action.type) {
    case entityActions.GET_ENTITIES_SUCCESS:
      const entities = action.payload as Partial<Entities>;

      return {
        users: Object.assign({}, state.users, entities['users']),
        posts: Object.assign({}, state.posts, entities['posts']),
      };

    default:
      return state;
  }
}
