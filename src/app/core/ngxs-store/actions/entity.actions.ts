import { Entities } from '../../normalizr/types/entites';

export class GetEntities {
  static readonly type = '[Entity] GetEntities';

  constructor(public entities: Partial<Entities>) {}
}
