import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-photo-details-title',
  templateUrl: './photo-details-title.component.html',
  styleUrls: ['./photo-details-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailsTitleComponent {
  @Input() photo: NormalizedPhotoEntity | null = null;

  @Input() album: NormalizedAlbumEntity | null = null;
}
