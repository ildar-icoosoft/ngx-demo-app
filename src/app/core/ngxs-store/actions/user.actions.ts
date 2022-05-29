import { PageRequest } from '../../types/pagination/page-request';
import { ReturnsNormalizedData } from '../../ngrx-store/decorators/returns-normalized-data';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';

export class GetUsers {
  static readonly type = '[User] GetUsers';

  constructor(public pageRequest: PageRequest) {}
}

@ReturnsNormalizedData()
export class GetUsersSuccess {
  static readonly type = '[User] GetUsersSuccess';

  constructor(public data: NormalizedData<PageResult<number>>) {}
}

export class GetUsersFailed {
  static readonly type = '[User] GetUsersFailed';

  constructor(public error: any) {}
}
