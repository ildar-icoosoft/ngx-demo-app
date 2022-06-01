import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NormalizedPostEntity } from '../../../../core/normalizr/types/models/normalized-post-entity';
import { DashboardState } from '../../ngxs-store/dashboard.state';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { DashboardActions } from '../../ngxs-store/dashboard.actions';

@Component({
  selector: 'app-dashboard-posts-container',
  templateUrl: './dashboard-posts-container.component.html',
  styleUrls: ['./dashboard-posts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPostsContainerComponent {
  @Select(DashboardState.posts) posts$!: Observable<NormalizedPostEntity[]>;

  @Select(actionsExecuting([DashboardActions.GetRecentPosts]))
  loadInProcess$!: Observable<ActionsExecuting>;
}
