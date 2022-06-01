import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PageRequest } from '../types/pagination/page-request';
import { prepareAlbum, preparePhoto, preparePost } from '../utils/prepare-data';
import { pageRequestToString } from '../utils/url';
import { NormalizedAlbumEntity } from '../normalizr/types/models/normalized-album-entity';
import { NormalizedPostEntity } from '../normalizr/types/models/normalized-post-entity';
import { User } from '../types/models/user';
import { NormalizedPhotoEntity } from '../normalizr/types/models/normalized-photo-entity';

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

  getUsers(pageRequest: PageRequest): Observable<PageResult<User>> {
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

  getUser(userId: number): Observable<User> {
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
}
