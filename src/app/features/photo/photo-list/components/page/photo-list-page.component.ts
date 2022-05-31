import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { Observable } from 'rxjs';
import { PhotoListService } from '../../akita-state/photo-list.service';
import { PhotoListQuery } from '../../akita-state/photo-list.query';
import { photoListDefaultPageRequest } from '../../akita-state/photo-list.store';
import { Photo } from '../../../../../core/types/models/photo';

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

  photos$: Observable<Photo[]> = this.photosQuery.selectAll();

  isLastPage$: Observable<boolean> = this.photosQuery.isLastPage();

  constructor(private photosService: PhotoListService, private photosQuery: PhotoListQuery) {}

  ngOnInit(): void {
    this.photosService.getPhotos(photoListDefaultPageRequest);
  }

  loadMore(): void {
    this.photosService.getNextPhotos();
  }
}
