import { Entities } from '../../normalizr/types/entites';

export namespace EntityActions {
  export class GetEntitiesSuccess {
    static readonly type = '[Entity] GetEntitiesSuccess';

    constructor(public entities: Partial<Entities>) {}
  }
}
