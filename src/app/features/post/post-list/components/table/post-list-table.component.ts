import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListTableComponent {
  faSortUp = faSortUp;
}
