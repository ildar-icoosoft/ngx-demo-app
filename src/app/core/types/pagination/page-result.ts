import { Pageable } from './pageable';

export type PageResult<T> = {
  totalCount: number;
  items: T[];
} & Pageable;
