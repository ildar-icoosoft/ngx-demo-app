import { PageResult } from '../../../core/types/pagination/page-result';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { NormalizedPostEntity } from '../../../core/normalizr/types/models/normalized-post-entity';
import { NormalizedPhotoEntity } from '../../../core/normalizr/types/models/normalized-photo-entity';
import { DashboardActions } from './dashboard.actions';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { PageRequest } from '../../../core/types/pagination/page-request';
import { NormalizedAlbumEntity } from '../../../core/normalizr/types/models/normalized-album-entity';

export interface DashboardStateModel {
  posts: NormalizedPostEntity[];
  photos: NormalizedPhotoEntity[];
  statistics: {
    totalPostsCount: number;
    totalAlbumsCount: number;
    totalPhotosCount: number;
  };
}

export const lastPhotosCount = 18;
export const lastPostsCount = 18;

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    posts: [],
    photos: [],
    statistics: {
      totalPostsCount: 0,
      totalAlbumsCount: 0,
      totalPhotosCount: 0,
    },
  },
})
@Injectable()
export class DashboardState {
  constructor(private api: ApiService) {}

  @Action(DashboardActions.GetRecentPhotos)
  @ImmutableContext()
  getRecentPhotos(
    ctx: StateContext<DashboardStateModel>,
  ): Observable<PageResult<NormalizedPhotoEntity>> {
    const request: PageRequest = {
      page: {
        number: 1,
        size: lastPhotosCount,
      },
      sort: {
        direction: 'desc',
        field: 'id',
      },
    };

    return this.api.getPhotos(request).pipe(
      tap((result: PageResult<NormalizedPhotoEntity>) => {
        ctx.setState((state: DashboardStateModel) => {
          state.photos = result.items;
          state.statistics.totalPhotosCount = result.totalCount;
          return state;
        });
      }),
    );
  }

  @Action(DashboardActions.GetRecentPosts)
  @ImmutableContext()
  getRecentPosts(
    ctx: StateContext<DashboardStateModel>,
  ): Observable<PageResult<NormalizedPostEntity>> {
    const request: PageRequest = {
      page: {
        number: 1,
        size: lastPostsCount,
      },
      sort: {
        direction: 'desc',
        field: 'id',
      },
    };

    return this.api.getPosts(request).pipe(
      tap((result: PageResult<NormalizedPostEntity>) => {
        ctx.setState((state: DashboardStateModel) => {
          state.posts = result.items;
          state.statistics.totalPostsCount = result.totalCount;
          return state;
        });
      }),
    );
  }

  @Action(DashboardActions.GetAlbumsCount)
  @ImmutableContext()
  getAlbumsCount(ctx: StateContext<DashboardStateModel>): Observable<number> {
    const request: PageRequest = {
      page: {
        number: 1,
        size: 1,
      },
    };

    return this.api.getAlbums(request).pipe(
      map((result: PageResult<NormalizedAlbumEntity>) => {
        const albumsCount = result.totalCount;
        ctx.setState((state: DashboardStateModel) => {
          state.statistics.totalAlbumsCount = albumsCount;
          return state;
        });
        return albumsCount;
      }),
    );
  }

  @Selector()
  static posts(state: DashboardStateModel): NormalizedPostEntity[] {
    return state.posts;
  }

  @Selector()
  static photos(state: DashboardStateModel): NormalizedPhotoEntity[] {
    return state.photos;
  }

  @Selector()
  static totalPostsCount(state: DashboardStateModel): number {
    return state.statistics.totalPostsCount;
  }

  @Selector()
  static totalAlbumsCount(state: DashboardStateModel): number {
    return state.statistics.totalAlbumsCount;
  }

  @Selector()
  static totalPhotosCount(state: DashboardStateModel): number {
    return state.statistics.totalPhotosCount;
  }
}
