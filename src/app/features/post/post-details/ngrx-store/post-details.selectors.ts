import { createSelector } from '@ngrx/store';
import { selectRouteParam } from '../../../../core/ngrx-store/selectors/router.selectors';
import { selectEntities } from '../../../../core/ngrx-store/selectors/entities.selectors';
import { Post } from '../../../../core/types/models/post';
import { denormalize } from 'normalizr';
import { postSchema } from '../../../../core/normalizr/schemas/post-schema';
import { Breadcrumb } from '../../../../shared/components/breadcrumbs/breadcrumbs.component';

export const selectSinglePost = createSelector(
  selectRouteParam('id'),
  selectEntities,
  (postId, entities): Post | undefined => {
    return denormalize(postId, postSchema, entities);
  },
);

export const selectSinglePostBreadcrumbs = createSelector(
  selectSinglePost,
  (post): Breadcrumb[] | null => {
    if (!post) return null;

    return [
      {
        link: '',
        text: 'Dashboard',
      },
      {
        link: ['/', 'posts'],
        text: 'Posts',
      },
      {
        link: null,
        text: post.id + '. ' + post.title,
      },
    ];
  },
);
