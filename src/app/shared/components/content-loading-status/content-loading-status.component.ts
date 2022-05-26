import { Component, Input } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const defaultEmptyContentMessage = 'Empty';

@Component({
  selector: 'app-content-loading-status',
  templateUrl: './content-loading-status.component.html',
  styleUrls: ['./content-loading-status.component.scss'],
})
export class ContentLoadingStatusComponent {
  @Input() emptyContentMessage = defaultEmptyContentMessage;

  @Input() isEmpty = false;

  @Input() isLoading = false;

  @Input() error: string | null = null;

  @Input() showEmptyContentMessage = true;

  faSpinner = faSpinner;
}
