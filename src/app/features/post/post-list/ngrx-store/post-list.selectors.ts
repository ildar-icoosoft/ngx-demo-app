import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postListFeatureKey, PostListState } from './post-list.reducer';
import { selectEntities } from '../../../../core/ngrx-store/selectors/entities.selectors';
import { Post } from '../../../../core/types/models/post';
import { denormalize } from 'normalizr';
import { postSchema } from '../../../../core/normalizr/schemas/post-schema';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { userListFeatureKey, UserListState } from './user-list.reducer';
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

export const selectPostListRequest = createSelector(selectPostListState, (state): PageRequest => {
  return state.pageRequest;
});

export const selectPostListTotalCount = createSelector(selectPostListState, (state): number => {
  return state.totalCount;
});

export const selectUserListState = createFeatureSelector<UserListState>(userListFeatureKey);

export const selectUserList = createSelector(
  selectUserListState,
  selectEntities,
  (state, entities): User[] => {
    return denormalize(state, [userSchema], entities);
  },
);
