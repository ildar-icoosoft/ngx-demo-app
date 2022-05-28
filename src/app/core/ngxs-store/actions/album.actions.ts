import { PageRequest } from '../../types/pagination/page-request';

export class GetAlbums {
  static readonly type = '[Album] GetAlbums';

  constructor(public pageRequest: PageRequest) {}
}
