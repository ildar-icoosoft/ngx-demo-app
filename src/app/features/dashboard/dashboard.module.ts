import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardStatisticsComponent } from './components/statistics/dashboard-statistics.component';
import { DashboardPageComponent } from './components/page/dashboard-page.component';
import { DashboardPhotosComponent } from './components/photos/dashboard-photos.component';
import { DashboardPhotosContainerComponent } from './components/photos/container/dashboard-photos-container.component';
import { DashboardPostsContainerComponent } from './components/posts/dashboard-posts-container.component';
import { DashboardHeaderComponent } from './components/header/dashboard-header.component';
import { DashboardStatisticsContainerComponent } from './components/statistics/container/dashboard-statistics-container.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardPhotosItemComponent } from './components/photos-item/dashboard-photos-item.component';
import { NgxsModule } from '@ngxs/store';
import { DashboardState } from './ngxs-store/dashboard.state';

@NgModule({
  declarations: [
    DashboardStatisticsComponent,
    DashboardPageComponent,
    DashboardPhotosComponent,
    DashboardPhotosContainerComponent,
    DashboardPostsContainerComponent,
    DashboardHeaderComponent,
    DashboardStatisticsContainerComponent,
    DashboardPhotosItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxsModule.forFeature([DashboardState]),
  ],
})
export class DashboardModule {}
