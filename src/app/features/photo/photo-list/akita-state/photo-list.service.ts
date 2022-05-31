import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { PhotoListStore, PhotoListState } from './photo-list.store';
import { PageRequest } from '../../../../core/types/pagination/page-request';
import { PageResult } from '../../../../core/types/pagination/page-result';
import { ApiService } from '../../../../core/services/api.service';
import { combineLatest } from 'rxjs';
import { Photo } from '../../../../core/types/models/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListService extends NgEntityService<PhotoListState> {
  constructor(protected override store: PhotoListStore, private apiService: ApiService) {
    super(store);
  }

  getPhotos(pageRequest: PageRequest): void {
    combineLatest([
      this.apiService.getAlbums({}),
      this.apiService.getPhotos(pageRequest),
    ]).subscribe(([albumsPageResult, photosPageResult]) => {
      const albumsMap = new Map();
      albumsPageResult.items.forEach((album) => albumsMap.set(album.id, album));

      photosPageResult.items.forEach((photo) => {
        photo.album = albumsMap.get(photo.album);
      });

      // @todo на самом деле это не совсем PageResult<Photo>. У Photo свойство album должно быть типа
      // Album, а здесь NormalizedAlbumEntity. Но для нашей задачи это никак не мешает, поэтому пока оставим так.
      // Не хочется создавать из-за этого дополнительные типы
      this.store.updateList(photosPageResult as unknown as PageResult<Photo>);
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
