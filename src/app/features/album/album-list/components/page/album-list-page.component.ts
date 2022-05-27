import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-album-list-page',
  templateUrl: './album-list-page.component.html',
  styleUrls: ['./album-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumListPageComponent {
  breadcrumbs: Breadcrumb[] = [
    {
      link: '',
      text: 'Dashboard',
    },
    {
      link: null,
      text: 'Albums',
    },
  ];
}
