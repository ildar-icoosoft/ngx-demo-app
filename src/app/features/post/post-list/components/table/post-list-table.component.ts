import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../../../core/types/models/post';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListTableComponent {
  faSortUp = faSortUp;

  @Input() items: Post[] = [];
}
