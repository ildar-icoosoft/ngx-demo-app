import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select } from '@ngxs/store';
import { DashboardState } from '../../../ngxs-store/dashboard.state';
import { Observable } from 'rxjs';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { DashboardActions } from '../../../ngxs-store/dashboard.actions';
import { NormalizedPhotoEntity } from '../../../../../core/normalizr/types/models/normalized-photo-entity';

@Component({
  selector: 'app-dashboard-photos-container',
  templateUrl: './dashboard-photos-container.component.html',
  styleUrls: ['./dashboard-photos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPhotosContainerComponent {
  @Select(DashboardState.photos) photos$!: Observable<NormalizedPhotoEntity[]>;

  @Select(actionsExecuting([DashboardActions.GetRecentPhotos]))
  loadInProcess$!: Observable<ActionsExecuting>;
}
