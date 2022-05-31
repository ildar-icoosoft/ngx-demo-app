import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NormalizedUserEntity } from '../../../normalizr/types/models/normalized-user-entity';
import { NormalizedAlbumEntity } from '../../../normalizr/types/models/normalized-album-entity';
import { AlbumEntitiesStateModel } from './album-entities.state';
import { Observable, tap } from 'rxjs';
import { PageResult } from '../../../types/pagination/page-result';
import NormalizedData from '../../../normalizr/types/normalized-data';
import { normalize } from 'normalizr';
import { UserActions } from '../../actions/user.actions';
import { User } from '../../../types/models/user';
import { ApiService } from '../../../services/api.service';
import { userListSchema } from '../../../normalizr/schemas/user-schema';
import { AlbumActions } from '../../actions/album.actions';
import { EntityActions } from '../../actions/entity.actions';
import { HashMap } from '../../../types/hash-map';

export interface UserEntitiesStateModel {
  [id: string]: NormalizedUserEntity;
}

@State<UserEntitiesStateModel>({
  name: 'users',
  defaults: {},
})
@Injectable()
export class UserEntitiesState {
  constructor(private api: ApiService) {}

  @Action(UserActions.GetUsers)
  getUsers(
    ctx: StateContext<UserEntitiesStateModel>,
    action: AlbumActions.GetAlbums,
  ): Observable<PageResult<User>> {
    return this.api.getUsers(action.pageRequest).pipe(
      tap((result: PageResult<User>) => {
        const normalizedData: NormalizedData<PageResult<number>> = normalize(
          result,
          userListSchema,
        );

        ctx.dispatch(new UserActions.GetUsersSuccess(normalizedData));
      }),
    );
  }

  @Action(EntityActions.GetEntitiesSuccess)
  getEntitiesSuccess(
    ctx: StateContext<AlbumEntitiesStateModel>,
    action: EntityActions.GetEntitiesSuccess,
  ): void {
    if (action.entities['users']) {
      ctx.setState({
        ...ctx.getState(),
        ...(action.entities['users'] as HashMap<NormalizedAlbumEntity>),
      });
    }
  }
}
