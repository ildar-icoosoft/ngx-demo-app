import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { NormalizedUserEntity } from '../../normalizr/types/models/normalized-user-entity';
import { NormalizedAlbumEntity } from '../../normalizr/types/models/normalized-album-entity';
import { GetEntities } from '../actions/entity.actions';

export interface EntitiesStateModel {
  users: Record<string, NormalizedUserEntity>;
  albums: Record<string, NormalizedAlbumEntity>;
}

@State<EntitiesStateModel>({
  name: 'entities',
  defaults: {
    users: {},
    albums: {},
  },
})
@Injectable()
export class EntitiesState {
  @Action(GetEntities)
  getEntities(ctx: StateContext<EntitiesStateModel>, action: GetEntities) {
    const state = ctx.getState();
    ctx.setState({
      users: Object.assign({}, state.users, action.entities['users']),
      albums: Object.assign({}, state.albums, action.entities['albums']),
    });
  }
}
