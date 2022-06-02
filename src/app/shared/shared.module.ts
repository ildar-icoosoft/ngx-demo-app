import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentLoadingStatusComponent } from './components/content-loading-status/content-loading-status.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostListComponent } from './components/post-list/post-list.component';
import { PhotoListComponent } from './photo-list/list/photo-list.component';
import { PhotoListItemComponent } from './photo-list/item/photo-list-item.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ContentLoadingStatusComponent,
    PostListComponent,
    PhotoListComponent,
    PhotoListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FontAwesomeModule,
    InfiniteScrollModule,
  ],
  exports: [
    BreadcrumbsComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FontAwesomeModule,
    ContentLoadingStatusComponent,
    InfiniteScrollModule,
    PostListComponent,
    PhotoListComponent,
  ],
})
export class SharedModule {}
