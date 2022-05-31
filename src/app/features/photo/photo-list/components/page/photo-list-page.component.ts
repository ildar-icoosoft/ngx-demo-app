import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { PhotoListService } from '../../akita-state/photo-list.service';
import { PhotoListQuery } from '../../akita-state/photo-list.query';
import { photoListDefaultPageRequest } from '../../akita-state/photo-list.store';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';
import { HashMap } from '../../../../../core/types/hash-map';
import { PhotoListAlbumsQuery } from '../../akita-state/photo-list-albums.query';

@Component({
  selector: 'app-photo-list-page',
  templateUrl: './photo-list-page.component.html',
  styleUrls: ['./photo-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListPageComponent implements OnInit {
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

  constructor(
    private photosService: PhotoListService,
    private photosQuery: PhotoListQuery,
    private albumsQuery: PhotoListAlbumsQuery,
  ) {}

  ngOnInit(): void {
    this.photosService.getPhotos(photoListDefaultPageRequest);
    this.photosService.getAlbums({});
  }

  loadMore(): void {
    this.photosService.getNextPhotos();
  }
}
