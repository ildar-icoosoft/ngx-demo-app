import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DashboardActions } from '../../ngxs-store/dashboard.actions';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new DashboardActions.GetRecentPhotos());
    this.store.dispatch(new DashboardActions.GetRecentPosts());
    this.store.dispatch(new DashboardActions.GetAlbumsCount());
  }
}
