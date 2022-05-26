import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { Post } from '../types/models/post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pageable } from '../types/pagination/pageable';
import { preparePost } from '../utils/prepare-data';
import { User } from '../types/models/user';

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
}
