import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { PhotoListService } from '../../../akita-state/photo-list.service';
import { PhotoListQuery } from '../../../akita-state/photo-list.query';
import { NormalizedPhotoEntity } from '../../../../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';
import { HashMap } from '../../../../../../core/types/hash-map';
import { PhotoListAlbumsQuery } from '../../../akita-state/photo-list-albums.query';

@Component({
  selector: 'app-all-photos-page',
  templateUrl: './all-photos-page.component.html',
  styleUrls: ['./all-photos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPhotosPageComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [
    {
      link: '',
      text: 'Dashboard',
    },
    {
      link: null,
      text: 'Photos',
    },
  ];

  photos$: Observable<NormalizedPhotoEntity[]> = this.photosQuery.selectAll();

  albumsHashMap$: Observable<HashMap<NormalizedAlbumEntity>> = this.albumsQuery.selectAll({
    asObject: true,
  });

  isLastPage$: Observable<boolean> = this.photosQuery.isLastPage();

  loadInProcess$: Observable<boolean> = this.photosQuery.selectLoading();

  constructor(
    private photosService: PhotoListService,
    private photosQuery: PhotoListQuery,
    private albumsQuery: PhotoListAlbumsQuery,
  ) {}

  ngOnInit(): void {
    this.photosService.getPhotos({
      page: {
        number: 1,
        size: 36,
      },
    });
    this.photosService.getAlbums({});
  }

  loadMore(): void {
    this.photosService.getNextPhotos();
  }
}
