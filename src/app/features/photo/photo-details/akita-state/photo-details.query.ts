import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { PhotoDetailsState, PhotoDetailsStore } from './photo-details-store';
import { Breadcrumb } from '../../../../shared/components/breadcrumbs/breadcrumbs.component';

@Injectable({ providedIn: 'root' })
export class PhotoDetailsQuery extends Query<PhotoDetailsState> {
  constructor(protected override store: PhotoDetailsStore) {
    super(store);
  }

  selectBreadcrumbs(): Observable<Breadcrumb[] | null> {
    return this.select('photo').pipe(
      map((photo) => {
        if (!photo) return null;

        return [
          {
            link: '',
            text: 'Dashboard',
          },
          {
            link: ['/', 'photos'],
            text: 'Photos',
          },
          {
            link: null,
            text: photo.id + '. ' + photo.title,
          },
        ];
      }),
    );
  }
}
