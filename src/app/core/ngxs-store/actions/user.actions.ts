import { PageRequest } from '../../types/pagination/page-request';

export class GetUsers {
  static readonly type = '[User] GetUsers';

  constructor(public pageRequest: PageRequest, public appendData = false) {}
}
