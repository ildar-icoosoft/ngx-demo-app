import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStatisticsComponent } from './statistics/dashboard-statistics.component';
import { DashboardPageComponent } from './page/dashboard-page.component';
import { DashboardPhotosComponent } from './photos/dashboard-photos.component';
import { DashboardPhotosContainerComponent } from './photos/container/dashboard-photos-container.component';
import { DashboardPostsComponent } from './posts/dashboard-posts.component';
import { DashboardPostsContainerComponent } from './posts/container/dashboard-posts-container.component';
import { DashboardHeaderComponent } from './header/dashboard-header.component';
import { DashboardStatisticsContainerComponent } from './statistics/container/dashboard-statistics-container.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardPhotosItemComponent } from './photos-item/dashboard-photos-item.component';

@NgModule({
  declarations: [
    DashboardStatisticsComponent,
    DashboardPageComponent,
    DashboardPhotosComponent,
    DashboardPhotosContainerComponent,
    DashboardPostsComponent,
    DashboardPostsContainerComponent,
    DashboardHeaderComponent,
    DashboardStatisticsContainerComponent,
    DashboardPhotosItemComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
