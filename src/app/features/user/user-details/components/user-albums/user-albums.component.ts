import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAlbumsComponent {
  @Input() albums: NormalizedAlbumEntity[] = [];

  @Input() isLoading = true;

  trackByAlbum(index: number, post: NormalizedAlbumEntity): number {
    return post.id;
  }
}
