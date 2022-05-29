import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-photo-list-page',
  templateUrl: './photo-list-page.component.html',
  styleUrls: ['./photo-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListPageComponent {
  breadcrumbs: Breadcrumb[] = [
    {
      link: '',
      text: 'Dashboard',
    },
    {
      link: null,
      text: 'Photos',
    },
  ];
}
