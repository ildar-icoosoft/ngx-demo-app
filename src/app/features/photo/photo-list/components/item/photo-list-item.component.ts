import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Photo } from '../../../../../core/types/models/photo';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListItemComponent {
  @Input() photo?: Photo;
}
