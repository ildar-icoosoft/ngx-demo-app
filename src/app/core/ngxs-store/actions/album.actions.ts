import { PageableFilterField } from '../../types/pagination/pageable';

export class GetAlbums {
  static readonly type = '[Album] GetAlbums';

  constructor(public start: number, public limit: number, public filter: PageableFilterField[]) {}
}
