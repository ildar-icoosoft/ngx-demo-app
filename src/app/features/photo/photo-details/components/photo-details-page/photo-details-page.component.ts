import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoDetailsService } from '../../akita-state/photo-details.service';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';
import { PhotoDetailsQuery } from '../../akita-state/photo-details.query';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';

@Component({
  selector: 'app-photo-details-page',
  templateUrl: './photo-details-page.component.html',
  styleUrls: ['./photo-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailsPageComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[] | null> = this.photoDetailsQuery.selectBreadcrumbs();

  photo$: Observable<NormalizedPhotoEntity | null> = this.photoDetailsQuery.select('photo');

  photoLoadInProcess$: Observable<boolean> = this.photoDetailsQuery.selectLoading();

  album$: Observable<NormalizedAlbumEntity | null> = this.photoDetailsQuery.select('album');

  albumLoadInProcess$: Observable<boolean> = this.photoDetailsQuery.select('albumLoading');

  constructor(
    private route: ActivatedRoute,
    private photoDetailsService: PhotoDetailsService,
    private photoDetailsQuery: PhotoDetailsQuery,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const photoId = Number(params['id']);
      this.photoDetailsService.getPhoto(photoId);
    });
  }
}
