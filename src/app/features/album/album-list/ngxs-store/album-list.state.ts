import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetAlbums } from '../../../../core/ngxs-store/actions/album.actions';
import { ApiService } from '../../../../core/services/api.service';
import { map, mergeMap, tap } from 'rxjs';
import { denormalize, normalize } from 'normalizr';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { albumListSchema, albumSchema } from '../../../../core/normalizr/schemas/album-schema';
import { InfiniteScrollResult } from '../../../../core/types/infinite-scroll/infinite-scroll-result';
import { GetEntities } from '../../../../core/ngxs-store/actions/entity.actions';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { Album } from '../../../../core/types/models/album';
import { PageableFilterField } from '../../../../core/types/pagination/pageable';
import { GetPhotos } from '../../../../core/ngxs-store/actions/photo.actions';

export interface AlbumListStateModel {
  hasMore: boolean;
  pageSize: number;
  items: number[];
  filter: PageableFilterField[];
}

@State<AlbumListStateModel>({
  name: 'albumList',
  defaults: {
    hasMore: true,
    pageSize: 28,
    items: [],
    filter: [],
  },
})
@Injectable()
export class AlbumListState {
  constructor(private api: ApiService) {}

  @Action(GetAlbums)
  getAlbums(ctx: StateContext<AlbumListStateModel>, action: GetAlbums) {
    return this.api.getAlbums(action.start, action.limit, action.filter).pipe(
      map((result) => normalize(result, albumListSchema)),
      tap((data: NormalizedData<InfiniteScrollResult<number>>) => {
        const state = ctx.getState();
        ctx.patchState({
          filter: action.filter,
          hasMore: data.result.hasMore,
          items: action.start === 0 ? data.result.items : [...state.items, ...data.result.items],
        });
      }),
      tap((data: NormalizedData<InfiniteScrollResult<number>>) => {
        ctx.dispatch(
          new GetPhotos(
            data.result.items.map((albumId) => ({ field: 'albumId', value: '' + albumId })),
          ),
        );
      }),
      mergeMap((data: NormalizedData<InfiniteScrollResult<number>>) =>
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
  static hasMore(state: AlbumListStateModel): boolean {
    return state.hasMore;
  }
}
