import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, tap } from 'rxjs';
import { PageResult } from '../../types/pagination/page-result';
import { normalize } from 'normalizr';
import { albumListSchema } from '../../normalizr/schemas/album-schema';
import { NormalizedAlbumEntity } from '../../normalizr/types/models/normalized-album-entity';
import NormalizedData from '../../normalizr/types/normalized-data';
import { GetAlbums, GetAlbumsSuccess } from '../actions/album.actions';
import { GetEntitiesSuccess } from '../actions/entity.actions';

export interface AlbumEntitiesStateModel {
  [id: string]: NormalizedAlbumEntity;
}

@State<AlbumEntitiesStateModel>({
  name: 'albums',
  defaults: {},
})
@Injectable()
export class AlbumEntitiesState {
  constructor(private api: ApiService) {}

  @Action(GetAlbums)
  getAlbums(
    ctx: StateContext<AlbumEntitiesStateModel>,
    action: GetAlbums,
  ): Observable<PageResult<NormalizedAlbumEntity>> {
    return this.api.getAlbums(action.pageRequest).pipe(
      tap((result: PageResult<NormalizedAlbumEntity>) => {
        const normalizedData: NormalizedData<PageResult<number>> = normalize(
          result,
          albumListSchema,
        );

        ctx.dispatch(new GetAlbumsSuccess(normalizedData));
      }),
    );
  }

  @Action(GetEntitiesSuccess)
  getEntitiesSuccess(ctx: StateContext<AlbumEntitiesStateModel>, action: GetEntitiesSuccess): void {
    if (action.entities['albums']) {
      ctx.setState({
        ...ctx.getState(),
        ...(action.entities['albums'] as Record<string, NormalizedAlbumEntity>),
      });
    }
  }
}
