import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../../../../core/types/models/user';

@Component({
  selector: 'app-user-details-header',
  templateUrl: './user-details-header.component.html',
  styleUrls: ['./user-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsHeaderComponent {
  @Input() user: User | null = null;

  @Input() isLoading = true;

  faSpinner = faSpinner;
}
