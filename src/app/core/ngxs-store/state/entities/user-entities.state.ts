import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NormalizedUserEntity } from '../../../normalizr/types/models/normalized-user-entity';
import { GetEntitiesSuccess } from '../../actions/entity.actions';
import { NormalizedAlbumEntity } from '../../../normalizr/types/models/normalized-album-entity';
import { AlbumEntitiesStateModel } from './album-entities.state';
import { GetAlbums } from '../../actions/album.actions';
import { Observable, tap } from 'rxjs';
import { PageResult } from '../../../types/pagination/page-result';
import NormalizedData from '../../../normalizr/types/normalized-data';
import { normalize } from 'normalizr';
import { GetUsers, GetUsersSuccess } from '../../actions/user.actions';
import { User } from '../../../types/models/user';
import { ApiService } from '../../../services/api.service';
import { userListSchema } from '../../../normalizr/schemas/user-schema';

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

  @Action(GetUsers)
  getUsers(
    ctx: StateContext<UserEntitiesStateModel>,
    action: GetAlbums,
  ): Observable<PageResult<User>> {
    return this.api.getUsers(action.pageRequest).pipe(
      tap((result: PageResult<User>) => {
        const normalizedData: NormalizedData<PageResult<number>> = normalize(
          result,
          userListSchema,
        );

        ctx.dispatch(new GetUsersSuccess(normalizedData));
      }),
    );
  }

  @Action(GetEntitiesSuccess)
  getEntitiesSuccess(ctx: StateContext<AlbumEntitiesStateModel>, action: GetEntitiesSuccess): void {
    if (action.entities['users']) {
      ctx.setState({
        ...ctx.getState(),
        ...(action.entities['users'] as Record<string, NormalizedAlbumEntity>),
      });
    }
  }
}
