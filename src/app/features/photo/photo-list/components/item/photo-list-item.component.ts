import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo-list-item',
  templateUrl: './photo-list-item.component.html',
  styleUrls: ['./photo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListItemComponent {}
