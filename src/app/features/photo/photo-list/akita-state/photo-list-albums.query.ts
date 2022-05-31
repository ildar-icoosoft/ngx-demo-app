import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PhotoListAlbumsStore, PhotoListAlbumsState } from './photo-list-albums.store';

@Injectable({ providedIn: 'root' })
export class PhotoListAlbumsQuery extends QueryEntity<PhotoListAlbumsState> {
  constructor(protected override store: PhotoListAlbumsStore) {
    super(store);
  }
}
