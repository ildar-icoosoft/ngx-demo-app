import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsPageComponent } from './components/user-details-page/user-details-page.component';
import { UserDetailsHeaderComponent } from './components/user-details-header/user-details-header.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    UserDetailsPageComponent,
    UserDetailsHeaderComponent,
    UserAlbumsComponent,
    UserPostsComponent,
  ],
  imports: [CommonModule, UserDetailsRoutingModule, SharedModule],
})
export class UserDetailsModule {}
