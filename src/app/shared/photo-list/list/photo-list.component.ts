import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NormalizedPhotoEntity } from '../../../core/normalizr/types/models/normalized-photo-entity';
import { NormalizedAlbumEntity } from '../../../core/normalizr/types/models/normalized-album-entity';
import { HashMap } from '../../../core/types/hash-map';

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

  @Input() loadInProcess = true;

  @Input() showAlbumLink = true;

  @Output() loadMore = new EventEmitter<void>();

  faSpinner = faSpinner;

  trackByPhoto(index: number, item: NormalizedPhotoEntity): number {
    return item.id;
  }
}
