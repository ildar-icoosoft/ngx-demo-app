import { Actions, State, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AlbumEntitiesState } from './entities/album-entities.state';
import { UserEntitiesState } from './entities/user-entities.state';
import { GetEntitiesSuccess } from '../actions/entity.actions';
import { filter } from 'rxjs';
import { ActionWithNormalizedData } from '../../ngrx-store/types/action-with-normalized-data';
import { ActionStatus } from '../types/action-status';
import { ActionContext } from '../types/action-context';
import { NormalizedUserEntity } from '../../normalizr/types/models/normalized-user-entity';
import { NormalizedPostEntity } from '../../normalizr/types/models/normalized-post-entity';

export type EntitiesStateModel = {
  users: Record<string, NormalizedUserEntity>;
  posts: Record<string, NormalizedPostEntity>;
};

// в generic не указываю EntitiesStateModel, т.к. тогда компилятор ругается на пустой defaults
@State<{}>({
  name: 'entities',
  defaults: {},
  children: [AlbumEntitiesState, UserEntitiesState],
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
        this.store.dispatch(new GetEntitiesSuccess(actionContext.action.data.entities));
      });
  }
}
