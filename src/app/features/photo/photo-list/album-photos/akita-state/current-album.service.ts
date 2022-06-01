import { Injectable } from '@angular/core';
import { CurrentAlbumStore } from './current-album.store';
import { ApiService } from '../../../../../core/services/api.service';
import { mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrentAlbumService {
  constructor(private currentAlbumStore: CurrentAlbumStore, private apiService: ApiService) {}

  getAlbum(albumId: number): void {
    this.currentAlbumStore.setLoading(true);
    this.currentAlbumStore.setUserLoading(true);
    this.apiService
      .getSingleAlbum(albumId)
      .pipe(
        mergeMap((album) => {
          this.currentAlbumStore.update({
            album,
          });
          this.currentAlbumStore.setLoading(false);
          return this.apiService.getUser(album.user);
        }),
      )
      .subscribe({
        next: (user) => {
          this.currentAlbumStore.update({
            user,
          });
          this.currentAlbumStore.setUserLoading(false);
        },
        error: () => {
          this.currentAlbumStore.setLoading(false);
          this.currentAlbumStore.setUserLoading(false);
        },
      });
  }
}
