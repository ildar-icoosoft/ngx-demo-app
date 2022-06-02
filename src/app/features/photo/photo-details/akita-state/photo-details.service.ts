import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs';
import { PhotoDetailsStore } from './photo-details-store';
import { ApiService } from '../../../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class PhotoDetailsService {
  constructor(private photoDetailsStore: PhotoDetailsStore, private apiService: ApiService) {}

  getPhoto(photoId: number): void {
    this.photoDetailsStore.setLoading(true);
    this.photoDetailsStore.setAlbumLoading(true);
    this.apiService
      .getSinglePhoto(photoId)
      .pipe(
        mergeMap((photo) => {
          this.photoDetailsStore.update({
            photo,
          });
          this.photoDetailsStore.setLoading(false);
          return this.apiService.getSingleAlbum(photo.album);
        }),
      )
      .subscribe({
        next: (album) => {
          this.photoDetailsStore.update({
            album,
          });
          this.photoDetailsStore.setAlbumLoading(false);
        },
        error: () => {
          this.photoDetailsStore.setLoading(false);
          this.photoDetailsStore.setAlbumLoading(false);
        },
      });
  }
}
