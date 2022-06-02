import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PageRequest } from '../types/pagination/page-request';
import { prepareAlbum, preparePhoto, preparePost } from '../utils/prepare-data';
import { pageRequestToString } from '../utils/url';
import { NormalizedAlbumEntity } from '../normalizr/types/models/normalized-album-entity';
import { NormalizedPostEntity } from '../normalizr/types/models/normalized-post-entity';
import { NormalizedPhotoEntity } from '../normalizr/types/models/normalized-photo-entity';
import { NormalizedUserEntity } from '../normalizr/types/models/normalized-user-entity';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts(pageRequest: PageRequest): Observable<PageResult<NormalizedPostEntity>> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts?' + pageRequestToString(pageRequest), {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return {
            pageRequest,
            totalCount: Number(response.headers.get('x-total-count')),
            items: response.body.map(preparePost),
          };
        }),
      );
  }

  getSinglePost(id: number): Observable<NormalizedPostEntity> {
    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((post) => preparePost(post)));
  }

  getUsers(pageRequest: PageRequest): Observable<PageResult<NormalizedUserEntity>> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users' + pageRequestToString(pageRequest), {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return {
            pageRequest,
            totalCount: Number(response.headers.get('x-total-count')),
            items: response.body,
          };
        }),
      );
  }

  getUser(userId: number): Observable<NormalizedUserEntity> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getAlbums(pageRequest: PageRequest): Observable<PageResult<NormalizedAlbumEntity>> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/albums?' + pageRequestToString(pageRequest), {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return {
            pageRequest,
            totalCount: Number(response.headers.get('x-total-count')),
            items: response.body.map(prepareAlbum),
          };
        }),
      );
  }

  getSingleAlbum(id: number): Observable<NormalizedAlbumEntity> {
    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .pipe(map((post) => prepareAlbum(post)));
  }

  getPhotos(pageRequest: PageRequest): Observable<PageResult<NormalizedPhotoEntity>> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/photos?' + pageRequestToString(pageRequest), {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          return {
            pageRequest,
            totalCount: Number(response.headers.get('x-total-count')),
            items: response.body.map(preparePhoto),
          };
        }),
      );
  }

  getSinglePhoto(id: number): Observable<NormalizedPhotoEntity> {
    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .pipe(map((post) => preparePhoto(post)));
  }
}
