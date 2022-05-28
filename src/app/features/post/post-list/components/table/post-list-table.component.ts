import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../../../core/types/models/post';
import {
  PageRequest,
  PageRequestSortField,
} from '../../../../../core/types/pagination/page-request';

@Component({
  selector: 'app-post-list-table',
  templateUrl: './post-list-table.component.html',
  styleUrls: ['./post-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListTableComponent {
  faSortUp = faSortUp;

  faSortDown = faSortDown;

  columns: { id: string; title: string }[] = [
    {
      id: 'id',
      title: 'ID',
    },
    {
      id: 'userId',
      title: 'User',
    },
    {
      id: 'title',
      title: 'Title',
    },
    {
      id: 'body',
      title: 'Content',
    },
  ];

  @Input() items: Post[] = [];

  @Input() listRequest: PageRequest = {};

  @Input() loadInProcess = true;

  @Input() totalCount = 0;

  @Output() sort = new EventEmitter<PageRequestSortField>();

  @Output() pageChange = new EventEmitter<number>();

  sortBy(colId: string): void {
    if (this.listRequest.sort?.field === colId) {
      this.sort.emit({
        field: this.listRequest.sort.field,
        direction: this.listRequest.sort.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      this.sort.emit({
        field: colId,
        direction: 'asc',
      });
    }
  }
}
