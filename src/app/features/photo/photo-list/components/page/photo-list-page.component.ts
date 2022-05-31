import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { PhotosService } from '../../../../../core/akita-store/photos-state/photos.service';
import { PhotosQuery } from '../../../../../core/akita-store/photos-state/photos.query';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';
import { photoListDefaultPageRequest } from '../../../../../core/akita-store/photos-state/photos.store';

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

  photos$: Observable<NormalizedPhotoEntity[]> = this.photosQuery.selectPhotos();

  isLastPage$: Observable<boolean> = this.photosQuery.isLastPage();

  constructor(private photosService: PhotosService, private photosQuery: PhotosQuery) {}

  ngOnInit(): void {
    this.photosService.getPhotos(photoListDefaultPageRequest);
  }

  loadMore(): void {
    this.photosService.getNextPhotos();
  }
}
