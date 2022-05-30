import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListItemComponent {
  @Input() photo?: NormalizedPhotoEntity;
}
