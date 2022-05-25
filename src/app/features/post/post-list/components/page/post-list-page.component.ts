import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { select, Store } from '@ngrx/store';
import * as postActions from '../../../../../core/ngrx-store/actions/post.actions';
import { State } from '../../../../../core/ngrx-store/reducers';
import { selectPostListItems } from '../../ngrx-store/post-list.selectors';
import { Observable } from 'rxjs';
import { Post } from '../../../../../core/types/models/post';
import * as userActions from '../../../../../core/ngrx-store/actions/user.actions';

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

  page = 2;

  pageSize = 10;

  items$: Observable<Post[]> = this.store.pipe(select(selectPostListItems));

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(new postActions.GetPosts());
    this.store.dispatch(new userActions.GetUsers());
  }
}
