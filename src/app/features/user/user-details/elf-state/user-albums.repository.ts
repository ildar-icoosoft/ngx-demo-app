import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities } from '@ngneat/elf-entities';
import {
  selectIsRequestPending,
  updateRequestStatus,
  withRequestsStatus,
} from '@ngneat/elf-requests';
import { NormalizedAlbumEntity } from '../../../../core/normalizr/types/models/normalized-album-entity';
import { Injectable } from '@angular/core';

export const store = createStore(
  { name: 'userAlbums' },
  withEntities<NormalizedAlbumEntity>(),
  withRequestsStatus<'user-albums'>(),
);

@Injectable({ providedIn: 'root' })
export class UserAlbumsRepository {
  userAlbums$ = store.pipe(selectAllEntities());

  pending$ = store.pipe(selectIsRequestPending('user-albums'));

  setUserAlbums(albums: NormalizedAlbumEntity[]) {
    store.update(setEntities(albums));
  }

  setIsLoading(val: boolean): void {
    store.update(updateRequestStatus('user-albums', val ? 'pending' : 'idle'));
  }
}
