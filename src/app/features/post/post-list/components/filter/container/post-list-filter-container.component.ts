import { Component, ChangeDetectionStrategy } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from '../../../../../../core/types/models/user';
import { selectPostListRequest, selectUserList } from '../../../ngrx-store/post-list.selectors';
import { select, Store } from '@ngrx/store';
import { State } from '../../../../../../core/ngrx-store/reducers';
import { PageRequestFilterField } from '../../../../../../core/types/pagination/page-request';
import * as postActions from '../../../../../../core/ngrx-store/actions/post.actions';
import { postListPageSize } from '../../../ngrx-store/post-list.reducer';

@Component({
  selector: 'app-post-list-filter-container',
  templateUrl: './post-list-filter-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListFilterContainerComponent {
  users$: Observable<User[]> = this.store.pipe(select(selectUserList));

  constructor(private store: Store<State>) {}

  async changeFilter(filter: PageRequestFilterField[]): Promise<void> {
    const currentListRequest = await firstValueFrom(this.store.pipe(select(selectPostListRequest)));

    this.store.dispatch(
      new postActions.GetPosts({
        ...currentListRequest,
        page: {
          number: 1,
          size: postListPageSize,
        },
        filter,
      }),
    );
  }
}
