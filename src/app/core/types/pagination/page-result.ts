export interface PageResult<T> {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
