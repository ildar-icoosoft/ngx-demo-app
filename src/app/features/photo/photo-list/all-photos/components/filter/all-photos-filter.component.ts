import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PageRequestFilterField } from '../../../../../../core/types/pagination/page-request';
import { FormControl, FormGroup } from '@angular/forms';
import { asyncScheduler, throttleTime } from 'rxjs';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';

@UntilDestroy()
@Component({
  selector: 'app-all-photos-filter',
  templateUrl: './all-photos-filter.component.html',
  styleUrls: ['./all-photos-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPhotosFilterComponent implements OnInit {
  @Input() albums: NormalizedAlbumEntity[] = [];

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

  trackByAlbum(index: number, album: NormalizedAlbumEntity): number {
    return album.id;
  }
}
