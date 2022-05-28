import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Album } from '../../../../../core/types/models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListComponent {
  @Input() albums: Album[] = [];

  @Input() isLastPage = true;

  @Output() loadMore = new EventEmitter<void>();

  trackByAlbum(index: number, album: Album): number {
    return album.id;
  }
}
