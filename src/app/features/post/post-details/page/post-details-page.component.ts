import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { Post } from '../../../../core/types/models/post';
import { select, Store } from '@ngrx/store';
import { State } from '../../../../core/ngrx-store/reducers';
import {
  selectSinglePost,
  selectSinglePostBreadcrumbs,
} from '../ngrx-store/post-details.selectors';
import { GET_SINGLE_POST, GetSinglePost } from '../../../../core/ngrx-store/actions/post.actions';
import { ActivatedRoute } from '@angular/router';
import { GetUsers } from '../../../../core/ngrx-store/actions/user.actions';
import { selectIsActionInProcess } from '../../../../core/ngrx-store/selectors/current-actions.selectors';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsPageComponent implements OnInit {
  post$: Observable<Post | undefined> = this.store.pipe(select(selectSinglePost));

  loadInProcess$: Observable<boolean> = this.store.pipe(
    select(selectIsActionInProcess(GET_SINGLE_POST)),
  );

  breadcrumbs$: Observable<Breadcrumb[] | null> = this.store.pipe(
    select(selectSinglePostBreadcrumbs),
  );

  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.store.dispatch(new GetSinglePost(id));
    });
    this.store.dispatch(new GetUsers());
  }
}
