import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { select, Store } from '@ngrx/store';
import * as postActions from '../../../../../core/ngrx-store/actions/post.actions';
import { State } from '../../../../../core/ngrx-store/reducers';
import {
  selectPostListItems,
  selectPostListTotalCount,
  selectPostListPageable,
} from '../../ngrx-store/post-list.selectors';
import { firstValueFrom, Observable } from 'rxjs';
import { Post } from '../../../../../core/types/models/post';
import * as userActions from '../../../../../core/ngrx-store/actions/user.actions';
import { Pageable, PageableSortField } from '../../../../../core/types/pagination/pageable';
import { selectIsActionInProcess } from '../../../../../core/ngrx-store/selectors/current-actions.selectors';
import { GET_POSTS } from '../../../../../core/ngrx-store/actions/post.actions';
import { postListInitialPageable } from '../../ngrx-store/post-list.reducer';

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

  pageable$: Observable<Pageable> = this.store.pipe(select(selectPostListPageable));

  loadInProcess$: Observable<boolean> = this.store.pipe(select(selectIsActionInProcess(GET_POSTS)));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new postActions.GetPosts(postListInitialPageable));
    this.store.dispatch(new userActions.GetUsers());
  }

  async onPageChange(pageNumber: number): Promise<void> {
    const pageable = await firstValueFrom(this.pageable$);

    this.store.dispatch(
      new postActions.GetPosts({
        ...pageable,
        page: {
          number: pageNumber,
          size: pageable.page?.size || 0,
        },
      }),
    );
  }

  async onSort(sort: PageableSortField): Promise<void> {
    const pageable = await firstValueFrom(this.pageable$);

    this.store.dispatch(
      new postActions.GetPosts({
        ...pageable,
        sort,
      }),
    );
  }
}
