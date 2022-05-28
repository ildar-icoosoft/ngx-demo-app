export interface PageRequest {
  page?: Pagination;
  sort?: PageRequestSortField;
  filter?: PageRequestFilterField[];
}

export interface Pagination {
  number: number;
  size: number;
}

export interface PageRequestSortField {
  field: string;
  direction: 'asc' | 'desc';
}

export interface PageRequestFilterField {
  field: string;
  value: string;
}
