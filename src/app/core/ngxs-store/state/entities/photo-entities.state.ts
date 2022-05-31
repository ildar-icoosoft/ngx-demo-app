import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable, tap } from 'rxjs';
import { PageResult } from '../../../types/pagination/page-result';
import { normalize } from 'normalizr';
import NormalizedData from '../../../normalizr/types/normalized-data';
import { EntityActions } from '../../actions/entity.actions';
import { NormalizedPhotoEntity } from '../../../normalizr/types/models/normalized-photo-entity';
import { PhotoActions } from '../../actions/photo.actions';
import { photoListSchema } from '../../../normalizr/schemas/photo-schema';
import { HashMap } from '../../../types/hash-map';

export interface PhotoEntitiesStateModel {
  [id: string]: NormalizedPhotoEntity;
}

@State<PhotoEntitiesStateModel>({
  name: 'photos',
  defaults: {},
})
@Injectable()
export class PhotoEntitiesState {
  constructor(private api: ApiService) {}

  @Action(PhotoActions.GetPhotos)
  getPhotos(
    ctx: StateContext<PhotoEntitiesStateModel>,
    action: PhotoActions.GetPhotos,
  ): Observable<PageResult<NormalizedPhotoEntity>> {
    return this.api.getPhotos(action.pageRequest).pipe(
      tap((result: PageResult<NormalizedPhotoEntity>) => {
        const normalizedData: NormalizedData<PageResult<number>> = normalize(
          result,
          photoListSchema,
        );

        ctx.dispatch(new PhotoActions.GetPhotosSuccess(normalizedData, result));
      }),
    );
  }

  @Action(EntityActions.GetEntitiesSuccess)
  getEntitiesSuccess(
    ctx: StateContext<PhotoEntitiesStateModel>,
    action: EntityActions.GetEntitiesSuccess,
  ): void {
    if (action.entities['photos']) {
      ctx.setState({
        ...ctx.getState(),
        ...(action.entities['photos'] as HashMap<NormalizedPhotoEntity>),
      });
    }
  }
}
