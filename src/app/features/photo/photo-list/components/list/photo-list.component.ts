import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../../../../core/types/models/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent {
  @Input() photos: Photo[] = [];

  @Input() isLastPage = true;

  @Output() loadMore = new EventEmitter<void>();

  trackByPhoto(index: number, item: Photo): number {
    return item.id;
  }
}
