import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PhotoActions } from '../../../../core/ngxs-store/actions/photo.actions';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { Photo } from '../../../../core/types/models/photo';
import { photoSchema } from '../../../../core/normalizr/schemas/photo-schema';
import { denormalize } from 'normalizr';

export interface AlbumListPhotosStateModel {
  [albumId: string]: number[];
}

export const albumListPhotosCount = 4;

@State<AlbumListPhotosStateModel>({
  name: 'albumPhotosList',
  defaults: {},
})
@Injectable()
export class AlbumListPhotosState {
  @Action(PhotoActions.GetPhotosSuccess)
  getPhotos(ctx: StateContext<AlbumListPhotosStateModel>, action: PhotoActions.GetPhotosSuccess) {
    const photos: NormalizedPhotoEntity[] = action.pageResult.items;

    const newState: AlbumListPhotosStateModel = photos.reduce<AlbumListPhotosStateModel>(
      (state, photo) => {
        if (!state[photo.album]) {
          state[photo.album] = [];
        }
        if (state[photo.album].length < albumListPhotosCount) {
          state[photo.album].push(photo.id);
        }
        return state;
      },
      {},
    );

    ctx.setState({
      ...ctx.getState(),
      ...newState,
    });
  }

  @Selector([AlbumListPhotosState, EntitiesState])
  static groupedPhotos(
    state: AlbumListPhotosStateModel,
    entities: EntitiesStateModel,
  ): Record<string, Photo[]> {
    const res: Record<string, Photo[]> = {};
    for (let albumId in state) {
      res[albumId] = denormalize(state[albumId], [photoSchema], entities).filter(
        (item: Photo) => !!item,
      );
    }
    return res;
  }
}
