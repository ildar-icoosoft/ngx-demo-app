import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Album } from '../../../../../core/types/models/album';
import { Photo } from '../../../../../core/types/models/photo';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListItemComponent {
  @Input() album?: Album;

  @Input() photos: Photo[] = [];

  trackByPhoto(index: number, photo: Photo): number {
    return photo.id;
  }
}
