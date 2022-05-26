import { Pagination } from './pagination';

export interface Pageable {
  page?: Pagination;
  sort?: PageableSortField;
  filter?: PageableFilterField[];
}

export interface PageableSortField {
  field: string;
  direction: 'asc' | 'desc';
}

export interface PageableFilterField {
  field: string;
  value: string;
}
