import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CurrentAlbumStore, CurrentAlbumState } from './current-album.store';
import { map, Observable } from 'rxjs';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';

@Injectable({ providedIn: 'root' })
export class CurrentAlbumQuery extends Query<CurrentAlbumState> {
  constructor(protected override store: CurrentAlbumStore) {
    super(store);
  }

  selectBreadcrumbs(): Observable<Breadcrumb[] | null> {
    return this.select('album').pipe(
      map((album) => {
        if (!album) return null;

        return [
          {
            link: '',
            text: 'Dashboard',
          },
          {
            link: ['/', 'albums'],
            text: 'Albums',
          },
          {
            link: null,
            text: album.id + '. ' + album.title,
          },
        ];
      }),
    );
  }
}
