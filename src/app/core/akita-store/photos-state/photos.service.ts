import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { PhotosStore, PhotosState } from './photos.store';
import { PageRequest } from '../../types/pagination/page-request';
import { NormalizedPhotoEntity } from '../../normalizr/types/models/normalized-photo-entity';
import { PageResult } from '../../types/pagination/page-result';
import { ApiService } from '../../services/api.service';

@Injectable({ providedIn: 'root' })
export class PhotosService extends NgEntityService<PhotosState> {
  constructor(protected override store: PhotosStore, private apiService: ApiService) {
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
    const state: PhotosState = this.store.getValue();

    const currentPageRequest: PageRequest = state.ui.list.pageRequest;

    this.getPhotos({
      ...currentPageRequest,
      page: {
        number: currentPageRequest.page!.number + 1,
        size: currentPageRequest.page!.size,
      },
    });
  }
}
