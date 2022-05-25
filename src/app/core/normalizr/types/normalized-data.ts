import { Entities } from './entites';

export default interface NormalizedData<R, E = Partial<Entities>> {
  result: R;
  entities: E;
}
