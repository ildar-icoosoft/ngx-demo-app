import { PageRequest } from '../../types/pagination/page-request';

export class GetPhotos {
  static readonly type = '[Photo] GetPhotos';

  constructor(public pageRequest: PageRequest, public appendData = false) {}
}
