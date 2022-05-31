import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NormalizedAlbumEntity } from '../../../../core/normalizr/types/models/normalized-album-entity';

export interface PhotoListAlbumsState extends EntityState<NormalizedAlbumEntity> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photo-list-albums' })
export class PhotoListAlbumsStore extends EntityStore<PhotoListAlbumsState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }
}
