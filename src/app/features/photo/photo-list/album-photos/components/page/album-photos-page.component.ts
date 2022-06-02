import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { NormalizedPhotoEntity } from '../../../../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';
import { PhotoListService } from '../../../akita-state/photo-list.service';
import { PhotoListQuery } from '../../../akita-state/photo-list.query';
import { ActivatedRoute } from '@angular/router';
import { CurrentAlbumQuery } from '../../akita-state/current-album.query';
import { CurrentAlbumService } from '../../akita-state/current-album.service';
import { NormalizedUserEntity } from '../../../../../../core/normalizr/types/models/normalized-user-entity';

/**
 * Фотографии одного альбома
 */
@Component({
  selector: 'app-album-photos-page',
  templateUrl: './album-photos-page.component.html',
  styleUrls: ['./album-photos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumPhotosPageComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[] | null> = this.currentAlbumQuery.selectBreadcrumbs();

  album$: Observable<NormalizedAlbumEntity | null> = this.currentAlbumQuery.select('album');

  albumLoadInProcess$: Observable<boolean> = this.currentAlbumQuery.selectLoading();

  albumAuthor$: Observable<NormalizedUserEntity | null> = this.currentAlbumQuery.select('user');

  albumAuthorLoadInProcess$: Observable<boolean> = this.currentAlbumQuery.select('userLoading');

  photos$: Observable<NormalizedPhotoEntity[]> = this.photosQuery.selectAll();

  isLastPage$: Observable<boolean> = this.photosQuery.isLastPage();

  photosLoadInProcess$: Observable<boolean> = this.photosQuery.selectLoading();

  constructor(
    private photosService: PhotoListService,
    private photosQuery: PhotoListQuery,
    private currentAlbumQuery: CurrentAlbumQuery,
    private currentAlbumService: CurrentAlbumService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const albumId = params['id'] as string;
      this.photosService.getPhotos({
        page: {
          number: 1,
          size: 36,
        },
        filter: [
          {
            field: 'albumId',
            value: albumId,
          },
        ],
      });
      this.currentAlbumService.getAlbum(Number(albumId));
    });
  }

  loadMore(): void {
    this.photosService.getNextPhotos();
  }
}
