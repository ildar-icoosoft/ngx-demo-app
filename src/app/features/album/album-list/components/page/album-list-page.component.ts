import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Select, Store } from '@ngxs/store';
import { GetAlbums } from '../../../../../core/ngxs-store/actions/album.actions';
import { GetUsers } from '../../../../../core/ngxs-store/actions/user.actions';
import { albumListDefaultPageRequest, AlbumListState } from '../../ngxs-store/album-list.state';
import { Observable } from 'rxjs';
import { Album } from '../../../../../core/types/models/album';
import { PageRequest } from '../../../../../core/types/pagination/page-request';

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

  @Select(AlbumListState.isLastPage) isLastPage$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAlbums(albumListDefaultPageRequest));
    this.store.dispatch(new GetUsers({}));
  }

  loadMore(): void {
    const currentPageRequest: PageRequest = this.store.selectSnapshot(AlbumListState).pageRequest;

    this.store.dispatch(
      new GetAlbums({
        ...currentPageRequest,
        page: {
          number: currentPageRequest.page!.number + 1,
          size: currentPageRequest.page!.size,
        },
      }),
    );
  }
}
