import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Select, Store } from '@ngxs/store';
import { albumListDefaultPageRequest, AlbumListState } from '../../ngxs-store/album-list.state';
import { Observable } from 'rxjs';
import { Album } from '../../../../../core/types/models/album';
import { PageRequest } from '../../../../../core/types/pagination/page-request';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { AlbumActions } from '../../../../../core/ngxs-store/actions/album.actions';
import { UserActions } from '../../../../../core/ngxs-store/actions/user.actions';

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

  @Select(actionsExecuting([AlbumActions.GetAlbums]))
  loadInProcess$!: Observable<ActionsExecuting>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new AlbumActions.GetAlbums(albumListDefaultPageRequest));
    this.store.dispatch(new UserActions.GetUsers({}));
  }

  loadMore(): void {
    const currentPageRequest: PageRequest = this.store.selectSnapshot(AlbumListState).pageRequest;

    this.store.dispatch(
      new AlbumActions.GetAlbums({
        ...currentPageRequest,
        page: {
          number: currentPageRequest.page!.number + 1,
          size: currentPageRequest.page!.size,
        },
      }),
    );
  }
}
