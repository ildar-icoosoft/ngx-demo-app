import { PageableFilterField } from '../../types/pagination/pageable';

export class GetPhotos {
  static readonly type = '[Photo] GetPhotos';

  constructor(public filter: PageableFilterField[]) {}
}
