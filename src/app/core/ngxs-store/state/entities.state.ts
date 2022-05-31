import { Actions, State, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AlbumEntitiesState } from './entities/album-entities.state';
import { UserEntitiesState } from './entities/user-entities.state';
import { filter } from 'rxjs';
import { ActionWithNormalizedData } from '../../ngrx-store/types/action-with-normalized-data';
import { ActionStatus } from '../types/action-status';
import { ActionContext } from '../types/action-context';
import { NormalizedUserEntity } from '../../normalizr/types/models/normalized-user-entity';
import { NormalizedPostEntity } from '../../normalizr/types/models/normalized-post-entity';
import { EntityActions } from '../actions/entity.actions';
import { NormalizedPhotoEntity } from '../../normalizr/types/models/normalized-photo-entity';
import { PhotoEntitiesState } from './entities/photo-entities.state';
import { HashMap } from '../../types/hash-map';

export type EntitiesStateModel = {
  users: HashMap<NormalizedUserEntity>;
  posts: HashMap<NormalizedPostEntity>;
  photos: HashMap<NormalizedPhotoEntity>;
};

// в generic не указываю EntitiesStateModel, т.к. тогда компилятор ругается на пустой defaults
@State<{}>({
  name: 'entities',
  defaults: {},
  children: [AlbumEntitiesState, UserEntitiesState, PhotoEntitiesState],
})
@Injectable()
export class EntitiesState {
  constructor(private store: Store, private actions$: Actions) {
    this.actions$
      .pipe(
        filter((actionContext: ActionContext) => {
          return (
            !!actionContext.action.containsNormalizedData &&
            actionContext.status === ActionStatus.Successful
          );
        }),
      )
      .subscribe((actionContext: ActionContext<ActionWithNormalizedData>) => {
        this.store.dispatch(
          new EntityActions.GetEntitiesSuccess(actionContext.action.data.entities),
        );
      });
  }
}
