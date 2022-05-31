import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PhotoListStore, PhotoListState } from './photo-list.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoListQuery extends QueryEntity<PhotoListState> {
  constructor(protected override store: PhotoListStore) {
    super(store);
  }

  isLastPage(): Observable<boolean> {
    return this.select((state) => {
      return state.totalCount === state.ids!.length;
    });
  }
}
