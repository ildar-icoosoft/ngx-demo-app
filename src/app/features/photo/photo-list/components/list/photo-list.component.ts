import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent {
  @Input() photos: NormalizedPhotoEntity[] = [];

  @Input() isLastPage = true;

  @Output() loadMore = new EventEmitter<void>();

  trackByPhoto(index: number, item: NormalizedPhotoEntity): number {
    return item.id;
  }
}
