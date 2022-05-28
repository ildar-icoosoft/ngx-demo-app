import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListRoutingModule } from './post-list-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PostListFilterComponent } from './components/filter/post-list-filter.component';
import { PostListFilterContainerComponent } from './components/filter/container/post-list-filter-container.component';
import { PostListPageComponent } from './components/page/post-list-page.component';
import { PostListTableComponent } from './components/table/post-list-table.component';
import { StoreModule } from '@ngrx/store';
import * as fromPostList from './ngrx-store/post-list.reducer';
import * as fromUserList from './ngrx-store/user-list.reducer';

@NgModule({
  declarations: [
    PostListFilterComponent,
    PostListFilterContainerComponent,
    PostListPageComponent,
    PostListTableComponent,
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromPostList.postListFeatureKey, fromPostList.reducer),
    StoreModule.forFeature(fromUserList.userListFeatureKey, fromUserList.reducer),
  ],
})
export class PostListModule {}
