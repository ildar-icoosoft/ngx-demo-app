import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListRoutingModule } from './photo-list-routing.module';
import { PhotoListPageComponent } from './components/page/photo-list-page.component';
import { PhotoListFilterContainerComponent } from './components/filter/container/photo-list-filter-container.component';
import { PhotoListItemComponent } from './components/item/photo-list-item.component';
import { PhotoListFilterComponent } from './components/filter/photo-list-filter.component';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoListComponent } from './components/list/photo-list.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoListPageComponent,
    PhotoListFilterContainerComponent,
    PhotoListItemComponent,
    PhotoListFilterComponent,
  ],
  imports: [CommonModule, PhotoListRoutingModule, SharedModule],
})
export class PhotoListModule {}
