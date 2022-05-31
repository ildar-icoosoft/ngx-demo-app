import { Injectable } from '@angular/core';
import { PhotoListStore, PhotoListState } from './photo-list.store';
import {
  PageRequest,
  PageRequestFilterField,
} from '../../../../core/types/pagination/page-request';
import { ApiService } from '../../../../core/services/api.service';
import { PhotoListAlbumsStore } from './photo-list-albums.store';

@Injectable({ providedIn: 'root' })
export class PhotoListService {
  constructor(
    private photoStore: PhotoListStore,
    private albumsStore: PhotoListAlbumsStore,
    private apiService: ApiService,
  ) {}

  getPhotos(pageRequest: PageRequest): void {
    this.apiService.getPhotos(pageRequest).subscribe((pageResult) => {
      this.photoStore.updateList(pageResult);
    });
  }

  getNextPhotos(): void {
    const state: PhotoListState = this.photoStore.getValue();

    const currentPageRequest: PageRequest = state.pageRequest;

    this.getPhotos({
      ...currentPageRequest,
      page: {
        number: currentPageRequest.page!.number + 1,
        size: currentPageRequest.page!.size,
      },
    });
  }

  getAlbums(pageRequest: PageRequest): void {
    this.apiService.getAlbums(pageRequest).subscribe((pageResult) => {
      this.albumsStore.set(pageResult.items);
    });
  }

  updateFilter(filter: PageRequestFilterField[]): void {
    const state: PhotoListState = this.photoStore.getValue();

    const currentPageRequest: PageRequest = state.pageRequest;

    this.getPhotos({
      ...currentPageRequest,
      page: {
        number: 1,
        size: currentPageRequest.page!.size,
      },
      filter,
    });
  }
}
