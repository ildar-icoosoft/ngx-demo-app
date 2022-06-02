import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../../core/types/models/user';
import {
  PageRequest,
  PageRequestFilterField,
} from '../../../../../../core/types/pagination/page-request';
import { Select, Store } from '@ngxs/store';
import { UserListState } from '../../../ngxs-store/user-list.state';
import { AlbumListState } from '../../../ngxs-store/album-list.state';
import { AlbumActions } from '../../../../../../core/ngxs-store/actions/album.actions';

@Component({
  selector: 'app-album-list-filter-container',
  templateUrl: './album-list-filter-container.component.html',
  styleUrls: ['./album-list-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListFilterContainerComponent {
  @Select(UserListState.items) users$!: Observable<User[]>;

  constructor(private store: Store) {}

  changeFilter(filter: PageRequestFilterField[]): void {
    const currentListRequest: PageRequest = this.store.selectSnapshot(AlbumListState).pageRequest;

    this.store.dispatch(
      new AlbumActions.GetAlbums({
        ...currentListRequest,
        page: {
          number: 1,
          size: currentListRequest.page!.size,
        },
        filter,
      }),
    );
  }
}
