import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { select, Store } from '@ngrx/store';
import * as postActions from '../../../../../core/ngrx-store/actions/post.actions';
import { State } from '../../../../../core/ngrx-store/reducers';
import {
  selectPostListItems,
  selectPostListTotalCount,
  selectPostListRequest,
} from '../../ngrx-store/post-list.selectors';
import { firstValueFrom, Observable } from 'rxjs';
import { Post } from '../../../../../core/types/models/post';
import * as userActions from '../../../../../core/ngrx-store/actions/user.actions';
import {
  PageRequest,
  PageRequestSortField,
} from '../../../../../core/types/pagination/page-request';
import { selectIsActionInProcess } from '../../../../../core/ngrx-store/selectors/current-actions.selectors';
import { GET_POSTS } from '../../../../../core/ngrx-store/actions/post.actions';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListPageComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      link: '',
      text: 'Dashboard',
    },
    {
      link: null,
      text: 'Posts',
    },
  ];

  totalCount$: Observable<number> = this.store.pipe(select(selectPostListTotalCount));

  items$: Observable<Post[]> = this.store.pipe(select(selectPostListItems));

  currentListRequest$: Observable<PageRequest> = this.store.pipe(select(selectPostListRequest));

  loadInProcess$: Observable<boolean> = this.store.pipe(select(selectIsActionInProcess(GET_POSTS)));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(
      new postActions.GetPosts({
        page: {
          number: 1,
          size: 5,
        },
        sort: {
          field: 'id',
          direction: 'asc',
        },
      }),
    );
    this.store.dispatch(new userActions.GetUsers());
  }

  async onPageChange(pageNumber: number): Promise<void> {
    const currentListRequest = await firstValueFrom(this.currentListRequest$);

    this.store.dispatch(
      new postActions.GetPosts({
        ...currentListRequest,
        page: {
          number: pageNumber,
          size: currentListRequest.page?.size || 0,
        },
      }),
    );
  }

  async onSort(sort: PageRequestSortField): Promise<void> {
    const currentListRequest = await firstValueFrom(this.currentListRequest$);

    this.store.dispatch(
      new postActions.GetPosts({
        ...currentListRequest,
        sort,
      }),
    );
  }
}
