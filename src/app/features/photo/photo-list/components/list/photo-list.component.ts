import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';
import { HashMap } from '../../../../../core/types/hash-map';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent {
  @Input() photos: NormalizedPhotoEntity[] = [];

  @Input() albums: HashMap<NormalizedAlbumEntity> = {};

  @Input() isLastPage = true;

  @Output() loadMore = new EventEmitter<void>();

  trackByPhoto(index: number, item: NormalizedPhotoEntity): number {
    return item.id;
  }
}
