import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { NormalizedPhotoEntity } from '../../normalizr/types/models/normalized-photo-entity';
import { PageResult } from '../../types/pagination/page-result';
import { PageRequest } from '../../types/pagination/page-request';

export const photoListPageSize = 36;

export const photoListDefaultPageRequest: PageRequest = {
  page: {
    number: 1,
    size: photoListPageSize,
  },
};

export interface PhotosState extends EntityState<NormalizedPhotoEntity> {
  ui: {
    list: PageResult<number>;
  };
}

const initialState: PhotosState = {
  ui: {
    list: {
      pageRequest: photoListDefaultPageRequest,
      totalCount: 0,
      items: [],
    },
  },
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'photos' })
export class PhotosStore extends EntityStore<PhotosState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super(initialState);
  }

  updateList(pageResult: PageResult<NormalizedPhotoEntity>): void {
    this.add(pageResult.items);

    const newItemIds: number[] = pageResult.items.map((item) => item.id);
    this.update((oldState) => {
      return {
        ui: {
          list: {
            ...pageResult,
            items:
              pageResult.pageRequest.page?.number === 1
                ? newItemIds
                : [...oldState.ui.list.items, ...newItemIds],
          },
        },
      };
    });
  }
}
