import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';

export interface PhotoListState extends EntityState<NormalizedPhotoEntity> {
  totalCount: number;
  pageRequest: PageRequest;
}

const initialState: PhotoListState = {
  totalCount: 0,
  pageRequest: {},
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photo-list' })
export class PhotoListStore extends EntityStore<PhotoListState> {
  constructor() {
    super(initialState);
  }

  updateList(pageResult: PageResult<NormalizedPhotoEntity>): void {
    const { items, totalCount, pageRequest } = pageResult;

    if (pageResult.pageRequest.page?.number === 1) {
      this.set(items);
    } else {
      this.add(items);
    }

    this.update({
      totalCount,
      pageRequest,
    });
  }
}
