import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';
import { NormalizedUserEntity } from '../../../../../core/normalizr/types/models/normalized-user-entity';

export interface CurrentAlbumState {
  album: NormalizedAlbumEntity | null;
  user: NormalizedUserEntity | null;
  userLoading: boolean;
}

export function createInitialState(): CurrentAlbumState {
  return {
    album: null,
    user: null,
    userLoading: true,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-album' })
export class CurrentAlbumStore extends Store<CurrentAlbumState> {
  constructor() {
    super(createInitialState());
  }

  setUserLoading(val: boolean) {
    this.update({
      userLoading: val,
    });
  }
}
