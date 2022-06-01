import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { DashboardState } from '../../../ngxs-store/dashboard.state';
import { Observable } from 'rxjs';
import { actionsExecuting } from '@ngxs-labs/actions-executing';
import { DashboardActions } from '../../../ngxs-store/dashboard.actions';
import { ActionsExecuting } from '@ngxs-labs/actions-executing/lib/actions-executing.selector';

@Component({
  selector: 'app-dashboard-statistics-container',
  templateUrl: './dashboard-statistics-container.component.html',
  styleUrls: ['./dashboard-statistics-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardStatisticsContainerComponent {
  @Select(DashboardState.totalPostsCount) totalPostsCount$!: Observable<number>;

  @Select(DashboardState.totalPhotosCount) totalPhotosCount$!: Observable<number>;

  @Select(DashboardState.totalAlbumsCount) totalAlbumsCount$!: Observable<number>;

  @Select(
    actionsExecuting([
      DashboardActions.GetRecentPosts,
      DashboardActions.GetRecentPhotos,
      DashboardActions.GetAlbumsCount,
    ]),
  )
  isStatisticsLoading$!: Observable<ActionsExecuting>;
}
