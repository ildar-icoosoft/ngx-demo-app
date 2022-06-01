import { Injectable } from '@angular/core';
import { UserPostsRepository } from './user-posts.repository';
import { ApiService } from '../../../../core/services/api.service';
import { NormalizedPostEntity } from '../../../../core/normalizr/types/models/normalized-post-entity';
import { catchError, map, Observable, tap } from 'rxjs';
import { NormalizedAlbumEntity } from '../../../../core/normalizr/types/models/normalized-album-entity';
import { UserAlbumsRepository } from './user-albums.repository';
import { User } from '../../../../core/types/models/user';
import { UserDetailsRepository } from './user-details.repository';

@Injectable({ providedIn: 'root' })
export class UserDetailsService {
  constructor(
    private apiService: ApiService,
    private postsRepo: UserPostsRepository,
    private albumsRepo: UserAlbumsRepository,
    private userRepo: UserDetailsRepository,
  ) {}

  getUserPosts(userId: number): Observable<NormalizedPostEntity[]> {
    this.postsRepo.setIsLoading(true);
    return this.apiService
      .getPosts({
        filter: [
          {
            field: 'userId',
            value: '' + userId,
          },
        ],
      })
      .pipe(
        map((res) => res.items),
        tap((posts) => {
          this.postsRepo.setIsLoading(false);
          this.postsRepo.setUserPosts(posts);
        }),
        catchError((err) => {
          this.postsRepo.setIsLoading(false);
          throw err;
        }),
      );
  }

  getUserAlbums(userId: number): Observable<NormalizedAlbumEntity[]> {
    this.albumsRepo.setIsLoading(true);
    return this.apiService
      .getAlbums({
        filter: [
          {
            field: 'userId',
            value: '' + userId,
          },
        ],
      })
      .pipe(
        map((res) => res.items),
        tap((albums) => {
          this.albumsRepo.setIsLoading(false);
          this.albumsRepo.setUserAlbums(albums);
        }),
        catchError((err) => {
          this.albumsRepo.setIsLoading(false);
          throw err;
        }),
      );
  }

  getUser(userId: number): Observable<User> {
    this.userRepo.setIsLoading(true);
    return this.apiService.getUser(userId).pipe(
      tap((user) => {
        this.userRepo.setIsLoading(false);
        this.userRepo.updateUser(user);
      }),
      catchError((err) => {
        this.userRepo.setIsLoading(false);
        throw err;
      }),
    );
  }
}
