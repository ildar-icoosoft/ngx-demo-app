import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-dashboard-photos-item',
  templateUrl: './dashboard-photos-item.component.html',
  styleUrls: ['./dashboard-photos-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPhotosItemComponent {
  @Input() photo?: NormalizedPhotoEntity;
}
