import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { denormalize } from 'normalizr';
import { albumSchema } from '../../../../core/normalizr/schemas/album-schema';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { Album } from '../../../../core/types/models/album';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { AlbumActions } from '../../../../core/ngxs-store/actions/album.actions';
import { PhotoActions } from '../../../../core/ngxs-store/actions/photo.actions';

export type AlbumListStateModel = PageResult<number>;

export const albumListPageSize = 28;

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
  @Action(AlbumActions.GetAlbumsSuccess)
  getAlbums(ctx: StateContext<AlbumListStateModel>, action: AlbumActions.GetAlbumsSuccess) {
    const pageResult: PageResult<number> = action.data.result;

    const state = ctx.getState();
    ctx.setState({
      ...pageResult,
      items:
        pageResult.pageRequest.page?.number === 1
          ? pageResult.items
          : [...state.items, ...pageResult.items],
    });

    // идея в том, что нужно запрашивать только фотки для полученных альбомов. Нам нужно только 4 фотки каждого альбома,
    // но АПИ не позволяет нам задавать лимит для количества фоток для каждого альбома.
    ctx.dispatch(
      new PhotoActions.GetPhotos({
        filter: pageResult.items.map((albumId) => ({ field: 'albumId', value: '' + albumId })),
      }),
    );
  }

  @Selector([AlbumListState, EntitiesState])
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
