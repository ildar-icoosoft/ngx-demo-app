import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../../core/types/models/user';
import { PageableFilterField } from '../../../../../../core/types/pagination/pageable';
import { Select, Store } from '@ngxs/store';
import { UserDropdownListState } from '../../../ngxs-store/user-dropdown-list.state';
import { AlbumListState, AlbumListStateModel } from '../../../ngxs-store/album-list.state';
import { GetAlbums } from '../../../../../../core/ngxs-store/actions/album.actions';

@Component({
  selector: 'app-album-list-filter-container',
  templateUrl: './album-list-filter-container.component.html',
  styleUrls: ['./album-list-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListFilterContainerComponent {
  @Select(UserDropdownListState.items) users$!: Observable<User[]>;

  constructor(private store: Store) {}

  changeFilter(filter: PageableFilterField[]): void {
    const stateModel: AlbumListStateModel = this.store.selectSnapshot(AlbumListState);

    const { pageSize } = stateModel;

    this.store.dispatch(new GetAlbums(0, pageSize, filter));
  }
}
