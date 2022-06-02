import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PageRequestFilterField } from '../../../../../../core/types/pagination/page-request';
import { FormControl, FormGroup } from '@angular/forms';
import { asyncScheduler, throttleTime } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NormalizedAlbumEntity } from '../../../../../../core/normalizr/types/models/normalized-album-entity';

@UntilDestroy()
@Component({
  selector: 'app-album-photos-filter',
  templateUrl: './album-photos-filter.component.html',
  styleUrls: ['./album-photos-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumPhotosFilterComponent implements OnInit {
  @Output() changeFilter = new EventEmitter<PageRequestFilterField[]>();

  group = new FormGroup({
    q: new FormControl(''),
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
        this.changeFilter.emit(filter);
      });
  }

  trackByAlbum(index: number, album: NormalizedAlbumEntity): number {
    return album.id;
  }
}
