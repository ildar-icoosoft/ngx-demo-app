import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities } from '@ngneat/elf-entities';
import {
  selectIsRequestPending,
  updateRequestStatus,
  withRequestsStatus,
} from '@ngneat/elf-requests';
import { Injectable } from '@angular/core';
import { NormalizedPostEntity } from '../../../../core/normalizr/types/models/normalized-post-entity';

export const store = createStore(
  { name: 'userPosts' },
  withEntities<NormalizedPostEntity>(),
  withRequestsStatus<'user-posts'>(),
);

@Injectable({ providedIn: 'root' })
export class UserPostsRepository {
  userPosts$ = store.pipe(selectAllEntities());

  pending$ = store.pipe(selectIsRequestPending('user-posts'));

  setUserPosts(posts: NormalizedPostEntity[]) {
    store.update(setEntities(posts));
  }

  setIsLoading(val: boolean): void {
    store.update(updateRequestStatus('user-posts', val ? 'pending' : 'idle'));
  }
}
