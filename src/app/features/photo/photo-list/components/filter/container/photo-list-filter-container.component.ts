import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';
import { PhotoListAlbumsQuery } from '../../../akita-state/photo-list-albums.query';
import { PageRequestFilterField } from '../../../../../../core/types/pagination/page-request';
import { PhotoListService } from '../../../akita-state/photo-list.service';

@Component({
  selector: 'app-photo-list-filter-container',
  templateUrl: './photo-list-filter-container.component.html',
  styleUrls: ['./photo-list-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListFilterContainerComponent {
  albums$: Observable<NormalizedAlbumEntity[]> = this.albumsQuery.selectAll();

  constructor(private albumsQuery: PhotoListAlbumsQuery, private photosService: PhotoListService) {}

  changeFilter(filter: PageRequestFilterField[]): void {
    this.photosService.updateFilter(filter);
  }
}
