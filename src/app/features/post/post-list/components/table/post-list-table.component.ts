import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../../../core/types/models/post';
import { PageableSortField } from '../../../../../core/types/pagination/pageable';

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

  @Input() sorting: PageableSortField | null = null;

  @Output() sort = new EventEmitter<PageableSortField>();

  sortBy(colId: string): void {
    if (this.sorting?.field === colId) {
      this.sort.emit({
        field: this.sorting.field,
        direction: this.sorting.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      this.sort.emit({
        field: colId,
        direction: 'asc',
      });
    }
  }
}
