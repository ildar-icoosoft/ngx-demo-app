import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PageRequestFilterField } from '../../../../../core/types/pagination/page-request';
import { FormControl, FormGroup } from '@angular/forms';
import { asyncScheduler, throttleTime } from 'rxjs';
import { Album } from '../../../../../core/types/models/album';

@UntilDestroy()
@Component({
  selector: 'app-photo-list-filter',
  templateUrl: './photo-list-filter.component.html',
  styleUrls: ['./photo-list-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListFilterComponent implements OnInit {
  @Input() albums: Album[] = [];

  @Output() changeFilter = new EventEmitter<PageRequestFilterField[]>();

  group = new FormGroup({
    q: new FormControl(''),
    albumId: new FormControl('0'),
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
        if (value.albumId !== '0') {
          filter.push({
            field: 'albumId',
            value: value.albumId,
          });
        }
        this.changeFilter.emit(filter);
      });
  }

  trackByAlbum(index: number, album: Album): number {
    return album.id;
  }
}
