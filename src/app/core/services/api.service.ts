import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { Post } from '../types/models/post';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PageRequest } from '../types/pagination/page-request';
import { prepareAlbum, preparePost } from '../utils/prepare-data';
import { Album } from '../types/models/album';
import { pageRequestToString } from '../utils/url';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPostListPage(pageRequest: PageRequest): Observable<PageResult<Post>> {
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

  getUsers(pageRequest: PageRequest): Observable<PageResult<Album>> {
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

  getAlbums(pageRequest: PageRequest): Observable<PageResult<Album>> {
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
}
