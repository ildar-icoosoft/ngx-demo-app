import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetAlbums } from '../../../../core/ngxs-store/actions/album.actions';
import { ApiService } from '../../../../core/services/api.service';
import { map, mergeMap, tap } from 'rxjs';
import { denormalize, normalize } from 'normalizr';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { albumListSchema, albumSchema } from '../../../../core/normalizr/schemas/album-schema';
import { GetEntities } from '../../../../core/ngxs-store/actions/entity.actions';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { Album } from '../../../../core/types/models/album';
import { GetPhotos } from '../../../../core/ngxs-store/actions/photo.actions';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';

export type AlbumListStateModel = PageResult<number>;

export const albumListPageSize = 20;

export const albumListDefaultPageRequest: PageRequest = {
  page: {
    number: 1,
    size: albumListPageSize,
  },
};

@State<AlbumListStateModel>({
  name: 'albumList',
  defaults: {
    pageRequest: albumListDefaultPageRequest,
    totalCount: 0,
    items: [],
  },
})
@Injectable()
export class AlbumListState {
  constructor(private api: ApiService) {}

  @Action(GetAlbums)
  getAlbums(ctx: StateContext<AlbumListStateModel>, action: GetAlbums) {
    return this.api.getAlbums(action.pageRequest).pipe(
      map((result) => normalize(result, albumListSchema)),
      tap((data: NormalizedData<PageResult<number>>) => {
        const state = ctx.getState();
        ctx.setState({
          ...data.result,
          items:
            action.pageRequest.page?.number === 1
              ? data.result.items
              : [...state.items, ...data.result.items],
        });
      }),
      tap((data: NormalizedData<PageResult<number>>) => {
        ctx.dispatch(
          new GetPhotos({
            filter: data.result.items.map((albumId) => ({ field: 'albumId', value: '' + albumId })),
          }),
        );
      }),
      mergeMap((data: NormalizedData<PageResult<number>>) =>
        ctx.dispatch(new GetEntities(data.entities)),
      ),
    );
  }

  @Selector([EntitiesState])
  static items(state: AlbumListStateModel, entities: EntitiesStateModel): Album[] {
    return denormalize(state.items, [albumSchema], entities).filter(
      (item: Album | undefined) => !!item,
    );
  }

  @Selector()
  static isLastPage(state: AlbumListStateModel): boolean {
    return state.totalCount === state.items.length;
  }
}
