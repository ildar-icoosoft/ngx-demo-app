import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { Post } from '../types/models/post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pageable, PageableFilterField } from '../types/pagination/pageable';
import { prepareAlbum, preparePost } from '../utils/prepare-data';
import { User } from '../types/models/user';
import { InfiniteScrollResult } from '../types/infinite-scroll/infinite-scroll-result';
import { Album } from '../types/models/album';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPostListPage(pageable: Pageable): Observable<PageResult<Post>> {
    const queryParams: Record<string, any> = {};
    if (pageable.page) {
      queryParams['_page'] = pageable.page.number;
      queryParams['_limit'] = pageable.page.size;
    }
    if (pageable.sort) {
      queryParams['_sort'] = pageable.sort.field;
      queryParams['_order'] = pageable.sort.direction;
    }
    if (pageable.filter) {
      pageable.filter.forEach((filterItem) => {
        queryParams[filterItem.field] = filterItem.value;
      });
    }

    const queryParamsString = new HttpParams({ fromObject: queryParams }).toString();

    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts?' + queryParamsString, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const items = response.body;

          const totalCount = Number(response.headers.get('x-total-count'));

          return {
            ...pageable,
            totalCount,
            items: items.map(preparePost),
          };
        }),
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(
    start: number,
    limit: number,
    filter: PageableFilterField[],
  ): Observable<InfiniteScrollResult<Album>> {
    const queryParams: Record<string, any> = {
      _start: start,
      _limit: limit,
    };
    filter.forEach((filterItem) => {
      queryParams[filterItem.field] = filterItem.value;
    });

    const queryParamsString = new HttpParams({ fromObject: queryParams }).toString();

    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/albums?' + queryParamsString, {
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const items = response.body;

          const totalCount = Number(response.headers.get('x-total-count'));

          return {
            hasMore: totalCount > start + limit,
            items: items.map(prepareAlbum),
          };
        }),
      );
  }
}
