import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-statistics',
  templateUrl: './dashboard-statistics.component.html',
  styleUrls: ['./dashboard-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardStatisticsComponent {
  @Input() totalPostsCount = 0;

  @Input() totalAlbumsCount = 0;

  @Input() totalPhotosCount = 0;

  @Input() isLoading = true;

  faSpinner = faSpinner;
}
