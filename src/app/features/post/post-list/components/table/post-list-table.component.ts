import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../../../core/types/models/post';
import { Pageable, PageableSortField } from '../../../../../core/types/pagination/pageable';

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

  @Input() pageable: Pageable = {};

  @Input() loadInProcess = true;

  @Input() totalCount = 0;

  @Output() sort = new EventEmitter<PageableSortField>();

  @Output() pageChange = new EventEmitter<number>();

  sortBy(colId: string): void {
    if (this.pageable.sort?.field === colId) {
      this.sort.emit({
        field: this.pageable.sort.field,
        direction: this.pageable.sort.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      this.sort.emit({
        field: colId,
        direction: 'asc',
      });
    }
  }
}
