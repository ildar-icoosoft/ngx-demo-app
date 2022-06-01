import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedPostEntity } from '../../../core/normalizr/types/models/normalized-post-entity';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {
  @Input() posts: NormalizedPostEntity[] = [];

  @Input() isLoading = true;

  trackByPost(index: number, post: NormalizedPostEntity): number {
    return post.id;
  }
}
