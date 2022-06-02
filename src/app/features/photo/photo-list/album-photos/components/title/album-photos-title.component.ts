import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';
import { NormalizedUserEntity } from '../../../../../../core/normalizr/types/models/normalized-user-entity';

@Component({
  selector: 'app-album-photos-title',
  templateUrl: './album-photos-title.component.html',
  styleUrls: ['./album-photos-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumPhotosTitleComponent {
  @Input() album: NormalizedAlbumEntity | null = null;

  @Input() albumLoadInProcess = true;

  @Input() albumAuthor: NormalizedUserEntity | null = null;

  @Input() albumAuthorLoadInProcess = true;

  faSpinner = faSpinner;
}
