import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NormalizedPostEntity } from '../../../../../core/normalizr/types/models/normalized-post-entity';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostsComponent {
  @Input() posts: NormalizedPostEntity[] = [];

  @Input() isLoading = true;

  trackByPost(index: number, post: NormalizedPostEntity): number {
    return post.id;
  }
}
