import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { User } from '../../../../../core/types/models/user';
import { PageRequestFilterField } from '../../../../../core/types/pagination/page-request';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { throttleTime, asyncScheduler } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-post-list-filter',
  templateUrl: './post-list-filter.component.html',
  styleUrls: ['./post-list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListFilterComponent implements OnInit {
  @Input() users: User[] = [];

  @Output() changeFilter = new EventEmitter<PageRequestFilterField[]>();

  group = new FormGroup({
    q: new FormControl(''),
    userId: new FormControl('0'),
  });

  ngOnInit(): void {
    this.group.valueChanges
      .pipe(throttleTime(1000, asyncScheduler, { trailing: true }), untilDestroyed(this))
      .subscribe((value) => {
        const filter: PageRequestFilterField[] = [];
        if (value.q) {
          filter.push({
            field: 'q',
            value: value.q,
          });
        }
        if (value.userId !== '0') {
          filter.push({
            field: 'userId',
            value: value.userId,
          });
        }
        this.changeFilter.emit(filter);
      });
  }

  trackByUser(index: number, user: User): number {
    return user.id;
  }
}
