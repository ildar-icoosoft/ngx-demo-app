import { Pagination } from './pagination';

export interface Pageable {
  page?: Pagination;
  sort?: PageableSortFields[];
  filter?: PageableFilterFields[];
}

export interface PageableSortFields {
  field: string;
  direction: 'asc' | 'desc';
}

export interface PageableFilterFields {
  field: string;
  value: string;
}
