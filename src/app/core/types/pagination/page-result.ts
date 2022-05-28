import { PageRequest } from './page-request';

export interface PageResult<T> {
  pageRequest: PageRequest;
  totalCount: number;
  items: T[];
}
