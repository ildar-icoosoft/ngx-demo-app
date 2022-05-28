import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Album } from '../../../../../core/types/models/album';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListItemComponent {
  @Input() album?: Album;
}
