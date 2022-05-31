import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable, tap } from 'rxjs';
import { PageResult } from '../../../types/pagination/page-result';
import { normalize } from 'normalizr';
import { albumListSchema } from '../../../normalizr/schemas/album-schema';
import { NormalizedAlbumEntity } from '../../../normalizr/types/models/normalized-album-entity';
import NormalizedData from '../../../normalizr/types/normalized-data';
import { EntityActions } from '../../actions/entity.actions';
import { AlbumActions } from '../../actions/album.actions';
import { HashMap } from '../../../types/hash-map';

export type AlbumEntitiesStateModel = HashMap<NormalizedAlbumEntity>;

@State<AlbumEntitiesStateModel>({
  name: 'albums',
  defaults: {},
})
@Injectable()
export class AlbumEntitiesState {
  constructor(private api: ApiService) {}

  @Action(AlbumActions.GetAlbums)
  getAlbums(
    ctx: StateContext<AlbumEntitiesStateModel>,
    action: AlbumActions.GetAlbums,
  ): Observable<PageResult<NormalizedAlbumEntity>> {
    return this.api.getAlbums(action.pageRequest).pipe(
      tap((result: PageResult<NormalizedAlbumEntity>) => {
        const normalizedData: NormalizedData<PageResult<number>> = normalize(
          result,
          albumListSchema,
        );

        ctx.dispatch(new AlbumActions.GetAlbumsSuccess(normalizedData));
      }),
    );
  }

  @Action(EntityActions.GetEntitiesSuccess)
  getEntitiesSuccess(
    ctx: StateContext<AlbumEntitiesStateModel>,
    action: EntityActions.GetEntitiesSuccess,
  ): void {
    if (action.entities['albums']) {
      ctx.setState({
        ...ctx.getState(),
        ...(action.entities['albums'] as HashMap<NormalizedAlbumEntity>),
      });
    }
  }
}
