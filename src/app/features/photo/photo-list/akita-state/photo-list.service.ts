import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { PhotoListStore, PhotoListState } from './photo-list.store';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { NormalizedPhotoEntity } from '../../../../core/normalizr/types/models/normalized-photo-entity';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PhotoListService extends NgEntityService<PhotoListState> {
  constructor(protected override store: PhotoListStore, private apiService: ApiService) {
    super(store);
  }

  getPhotos(pageRequest: PageRequest): void {
    this.apiService
      .getPhotos(pageRequest)
      .subscribe((result: PageResult<NormalizedPhotoEntity>) => {
        this.store.updateList(result);
      });
  }

  getNextPhotos(): void {
    const state: PhotoListState = this.store.getValue();

    const currentPageRequest: PageRequest = state.pageRequest;

    this.getPhotos({
      ...currentPageRequest,
      page: {
        number: currentPageRequest.page!.number + 1,
        size: currentPageRequest.page!.size,
      },
    });
  }
}
