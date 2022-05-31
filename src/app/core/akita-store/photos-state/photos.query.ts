import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PhotosStore, PhotosState } from './photos.store';
import { mergeMap, Observable } from 'rxjs';
import { NormalizedPhotoEntity } from '../../normalizr/types/models/normalized-photo-entity';

@Injectable({ providedIn: 'root' })
export class PhotosQuery extends QueryEntity<PhotosState> {
  constructor(protected override store: PhotosStore) {
    super(store);
  }

  selectPhotos(): Observable<NormalizedPhotoEntity[]> {
    return this.select(({ ui }) => ui.list.items).pipe(
      mergeMap((ids) => {
        return this.selectMany(ids);
      }),
    );
  }

  isLastPage(): Observable<boolean> {
    return this.select((state) => {
      const list = state.ui.list;
      return list.totalCount === list.items.length;
    });
  }
}
