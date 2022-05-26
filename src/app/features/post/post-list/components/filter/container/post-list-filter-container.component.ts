import { Component, ChangeDetectionStrategy } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { User } from '../../../../../../core/types/models/user';
import {
  selectPostListPageable,
  selectUserDropdownList,
} from '../../../ngrx-store/post-list.selectors';
import { select, Store } from '@ngrx/store';
import { State } from '../../../../../../core/ngrx-store/reducers';
import { PageableFilterField } from '../../../../../../core/types/pagination/pageable';
import * as postActions from '../../../../../../core/ngrx-store/actions/post.actions';

@Component({
  selector: 'app-post-list-filter-container',
  templateUrl: './post-list-filter-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListFilterContainerComponent {
  users$: Observable<User[]> = this.store.pipe(select(selectUserDropdownList));

  constructor(private store: Store<State>) {}

  async changeFilter(filter: PageableFilterField[]): Promise<void> {
    const pageable = await firstValueFrom(this.store.pipe(select(selectPostListPageable)));

    this.store.dispatch(
      new postActions.GetPosts({
        ...pageable,
        filter,
      }),
    );
  }
}
