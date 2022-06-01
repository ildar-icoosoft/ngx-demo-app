import { createStore, select, withProps } from '@ngneat/elf';
import { Injectable } from '@angular/core';
import {
  selectIsRequestPending,
  updateRequestStatus,
  withRequestsStatus,
} from '@ngneat/elf-requests';
import { User } from '../../../../core/types/models/user';
import { Observable } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserDetailsProps {
  user: User | null;
}

export const store = createStore(
  { name: 'userDetails' },
  withProps<UserDetailsProps>({
    user: null,
  }),
  withRequestsStatus<'user-details'>(),
);

@Injectable({ providedIn: 'root' })
export class UserDetailsRepository {
  user$: Observable<User | null> = store.pipe(select((state) => state.user));

  pending$ = store.pipe(selectIsRequestPending('user-details'));

  updateUser(user: User): void {
    store.update((state) => ({
      ...state,
      user,
    }));
  }

  setIsLoading(val: boolean): void {
    store.update(updateRequestStatus('user-details', val ? 'pending' : 'idle'));
  }
}
