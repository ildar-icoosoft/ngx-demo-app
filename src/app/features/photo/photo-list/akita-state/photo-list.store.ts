import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { Photo } from '../../../../core/types/models/photo';

export const photoListPageSize = 36;

export const photoListDefaultPageRequest: PageRequest = {
  page: {
    number: 1,
    size: photoListPageSize,
  },
};

export interface PhotoListState extends EntityState<Photo> {
  totalCount: number;
  pageRequest: PageRequest;
}

const initialState: PhotoListState = {
  totalCount: 0,
  pageRequest: photoListDefaultPageRequest,
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photoList' })
export class PhotoListStore extends EntityStore<PhotoListState> {
  constructor() {
    super(initialState);
  }

  updateList(pageResult: PageResult<Photo>): void {
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
