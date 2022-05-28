import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListPageComponent } from './components/page/album-list-page.component';
import { AlbumListComponent } from './components/list/album-list.component';
import { AlbumListFilterComponent } from './components/filter/album-list-filter.component';
import { SharedModule } from '../../../shared/shared.module';
import { AlbumListFilterContainerComponent } from './components/filter/container/album-list-filter-container.component';
import { AlbumListItemComponent } from './components/list-item/album-list-item.component';
import { NgxsModule } from '@ngxs/store';
import { AlbumListState } from './ngxs-store/album-list.state';
import { UserListState } from './ngxs-store/user-list.state';

@NgModule({
  declarations: [
    AlbumListPageComponent,
    AlbumListComponent,
    AlbumListFilterComponent,
    AlbumListFilterContainerComponent,
    AlbumListItemComponent,
  ],
  imports: [
    CommonModule,
    AlbumListRoutingModule,
    SharedModule,
    NgxsModule.forFeature([AlbumListState, UserListState]),
  ],
})
export class AlbumListModule {}
