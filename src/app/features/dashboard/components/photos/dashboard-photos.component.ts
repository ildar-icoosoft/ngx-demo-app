import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-dashboard-photos',
  templateUrl: './dashboard-photos.component.html',
  styleUrls: ['./dashboard-photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPhotosComponent {
  @Input() photos: NormalizedPhotoEntity[] = [];

  @Input() isLoading = true;

  trackByPhoto(index: number, post: NormalizedPhotoEntity): number {
    return post.id;
  }
}
