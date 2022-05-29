import { PageRequest } from '../../types/pagination/page-request';
import { ReturnsNormalizedData } from '../../ngrx-store/decorators/returns-normalized-data';
import NormalizedData from '../../normalizr/types/normalized-data';
import { PageResult } from '../../types/pagination/page-result';
import { NormalizedPhotoEntity } from '../../normalizr/types/models/normalized-photo-entity';

export namespace PhotoActions {
  export class GetPhotos {
    static readonly type = '[Photo] GetPhotos';

    constructor(public pageRequest: PageRequest) {}
  }

  @ReturnsNormalizedData()
  export class GetPhotosSuccess {
    static readonly type = '[Photo] GetPhotosSuccess';

    constructor(
      public data: NormalizedData<PageResult<number>>,
      public pageResult: PageResult<NormalizedPhotoEntity>,
    ) {}
  }
}
