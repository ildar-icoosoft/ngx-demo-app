import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postListFeatureKey, PostListState } from './post-list.reducer';
import { selectEntities } from '../../../../core/ngrx-store/selectors/entities.selectors';
import { Post } from '../../../../core/types/models/post';
import { denormalize } from 'normalizr';
import { postSchema } from '../../../../core/normalizr/schemas/post-schema';
import { Pageable } from '../../../../core/types/pagination/pageable';
import { omit } from 'lodash';
import { userDropdownListFeatureKey, UserDropdownListState } from './user-dropdown-list.reducer';
import { User } from '../../../../core/types/models/user';
import { userSchema } from '../../../../core/normalizr/schemas/user-schema';

export const selectPostListState = createFeatureSelector<PostListState>(postListFeatureKey);

export const selectPostListItems = createSelector(
  selectPostListState,
  selectEntities,
  (state, entities): Post[] => {
    return denormalize(state.items, [postSchema], entities);
  },
);

export const selectPostListPageable = createSelector(selectPostListState, (state): Pageable => {
  return omit(state, ['items', 'totalCount']);
});

export const selectPostListTotalCount = createSelector(selectPostListState, (state): number => {
  return state.totalCount;
});

export const selectUserDropdownListState = createFeatureSelector<UserDropdownListState>(
  userDropdownListFeatureKey,
);

export const selectUserDropdownList = createSelector(
  selectUserDropdownListState,
  selectEntities,
  (state, entities): User[] => {
    return denormalize(state, [userSchema], entities);
  },
);
