import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NormalizedPostEntity } from '../../../../../core/normalizr/types/models/normalized-post-entity';
import { UserDetailsService } from '../../elf-state/user-details.service';
import { ActivatedRoute } from '@angular/router';
import { UserPostsRepository } from '../../elf-state/user-posts.repository';
import { UserAlbumsRepository } from '../../elf-state/user-albums.repository';
import { NormalizedAlbumEntity } from '../../../../../core/normalizr/types/models/normalized-album-entity';
import { UserDetailsRepository } from '../../elf-state/user-details.repository';
import { User } from '../../../../../core/types/models/user';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsPageComponent implements OnInit {
  posts$: Observable<NormalizedPostEntity[]> = this.postsRepo.userPosts$;

  postsPending$: Observable<boolean> = this.postsRepo.pending$;

  albums$: Observable<NormalizedAlbumEntity[]> = this.albumsRepo.userAlbums$;

  albumsPending$: Observable<boolean> = this.albumsRepo.pending$;

  user$: Observable<User | null> = this.userRepo.user$;

  userPending$: Observable<boolean> = this.userRepo.pending$;

  constructor(
    private userDetails: UserDetailsService,
    private route: ActivatedRoute,
    private postsRepo: UserPostsRepository,
    private albumsRepo: UserAlbumsRepository,
    private userRepo: UserDetailsRepository,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);

      this.userDetails.getUserPosts(id).subscribe();
      this.userDetails.getUserAlbums(id).subscribe();
      this.userDetails.getUser(id).subscribe();
    });
  }
}
