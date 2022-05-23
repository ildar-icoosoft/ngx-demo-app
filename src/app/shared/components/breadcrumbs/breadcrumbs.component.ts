import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Breadcrumb {
  text: string;
  link: null | string | string[];
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() items: Breadcrumb[] = [];
}
