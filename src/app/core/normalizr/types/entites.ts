import { HashMap } from '../../types/hash-map';

export interface Entities {
  [entityName: string]: HashMap<unknown>;
}
