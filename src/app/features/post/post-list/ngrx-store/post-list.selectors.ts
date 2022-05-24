import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postListFeatureKey, PostListState } from './post-list.reducer';
import { selectEntities } from '../../../../core/ngrx-store/selectors/entities.selectors';
import { Post } from '../../../../core/types/models/post';
import { denormalize } from 'normalizr';
import { postSchema } from '../../../../core/normalizr/schemas/post-schema';

export const selectPostListState = createFeatureSelector<PostListState>(postListFeatureKey);

export const selectPostListItems = createSelector(
  selectPostListState,
  selectEntities,
  (state, entities): Post[] => {
    return denormalize(state.items, [postSchema], entities);
  },
);
