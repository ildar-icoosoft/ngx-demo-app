import { PageRequest } from '../../types/pagination/page-request';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';
import { ReturnsNormalizedData } from '../../ngrx-store/decorators/returns-normalized-data';

export namespace AlbumActions {
  export class GetAlbums {
    static readonly type = '[Album] GetAlbums';

    constructor(public pageRequest: PageRequest) {}
  }

  @ReturnsNormalizedData()
  export class GetAlbumsSuccess {
    static readonly type = '[Album] GetAlbumsSuccess';

    constructor(public data: NormalizedData<PageResult<number>>) {}
  }
}
