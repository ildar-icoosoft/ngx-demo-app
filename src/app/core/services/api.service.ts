import { Injectable } from '@angular/core';
import { PageResult } from '../types/pagination/page-result';
import { Post } from '../types/models/post';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pageable } from '../types/pagination/pageable';
import { preparePost } from '../utils/prepare-data';
import { User } from '../types/models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPostListPage(data: Pageable): Observable<PageResult<Post>> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((items) => ({
        currentPage: 5,
        totalItems: 5,
        totalPages: 6,
        items: items.map(preparePost),
      })),
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
