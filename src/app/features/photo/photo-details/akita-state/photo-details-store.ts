import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../../core/normalizr/types/models/normalized-album-entity';

export interface PhotoDetailsState {
  photo: NormalizedPhotoEntity | null;
  album: NormalizedAlbumEntity | null;
  albumLoading: boolean;
}

export function createInitialState(): PhotoDetailsState {
  return {
    photo: null,
    album: null,
    albumLoading: true,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photo-details' })
export class PhotoDetailsStore extends Store<PhotoDetailsState> {
  constructor() {
    super(createInitialState());
  }

  setAlbumLoading(val: boolean) {
    this.update({
      albumLoading: val,
    });
  }
}
