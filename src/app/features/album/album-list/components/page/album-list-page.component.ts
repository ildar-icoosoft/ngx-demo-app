import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Select, Store } from '@ngxs/store';
import { GetAlbums } from '../../../../../core/ngxs-store/actions/album.actions';
import { GetUsers } from '../../../../../core/ngxs-store/actions/user.actions';
import { AlbumListState, AlbumListStateModel } from '../../ngxs-store/album-list.state';
import { Observable } from 'rxjs';
import { Album } from '../../../../../core/types/models/album';

@Component({
  selector: 'app-album-list-page',
  templateUrl: './album-list-page.component.html',
  styleUrls: ['./album-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListPageComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      link: '',
      text: 'Dashboard',
    },
    {
      link: null,
      text: 'Albums',
    },
  ];

  @Select(AlbumListState.items) albums$!: Observable<Album[]>;

  @Select(AlbumListState.hasMore) hasMore$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const stateModel: AlbumListStateModel = this.store.selectSnapshot(AlbumListState);

    const { pageSize, filter } = stateModel;

    this.store.dispatch(new GetAlbums(0, pageSize, filter));
    this.store.dispatch(new GetUsers());
  }

  loadMore(): void {
    const stateModel: AlbumListStateModel = this.store.selectSnapshot(AlbumListState);

    const { items, pageSize, filter } = stateModel;

    this.store.dispatch(new GetAlbums(items.length, pageSize, filter));
  }
}
