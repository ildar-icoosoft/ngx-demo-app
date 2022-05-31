import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Album } from '../../../../../core/types/models/album';
import { ActionsExecuting } from '@ngxs-labs/actions-executing';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Photo } from '../../../../../core/types/models/photo';
import { HashMap } from '../../../../../core/types/hash-map';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListComponent {
  @Input() albums: Album[] = [];

  @Input() groupedPhotos: HashMap<Photo[]> = {};

  @Input() isLastPage = true;

  @Input() loadInProcess: ActionsExecuting = null;

  @Output() loadMore = new EventEmitter<void>();

  faSpinner = faSpinner;

  trackByAlbum(index: number, album: Album): number {
    return album.id;
  }
}
