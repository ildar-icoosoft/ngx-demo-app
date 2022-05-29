import { Entities } from '../../normalizr/types/entites';

export class GetEntities {
  static readonly type = '[Entity] GetEntities';

  constructor(public entities: Partial<Entities>) {}
}

export class GetEntitiesSuccess {
  static readonly type = '[Entity] GetEntitiesSuccess';

  constructor(public entities: Partial<Entities>) {}
}
