import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PhotoListService } from '../../../../akita-state/photo-list.service';
import { PageRequestFilterField } from '../../../../../../../core/types/pagination/page-request';
import { CurrentAlbumQuery } from '../../../akita-state/current-album.query';
import { NormalizedAlbumEntity } from '../../../../../../../core/normalizr/types/models/normalized-album-entity';

@Component({
  selector: 'app-album-photos-filter-container',
  templateUrl: './album-photos-filter-container.component.html',
  styleUrls: ['./album-photos-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumPhotosFilterContainerComponent {
  constructor(private albumQuery: CurrentAlbumQuery, private photosService: PhotoListService) {}

  changeFilter(filter: PageRequestFilterField[]): void {
    const state = this.albumQuery.getValue();
    const album = state.album as NormalizedAlbumEntity;

    this.photosService.updateFilter([
      ...filter,
      {
        field: 'albumId',
        value: String(album.id),
      },
    ]);
  }
}
