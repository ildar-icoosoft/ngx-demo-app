import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsPageComponent } from './components/page/user-details-page.component';
import { UserDetailsHeaderComponent } from './components/header/user-details-header.component';
import { UserAlbumsComponent } from './components/albums/user-albums.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [UserDetailsPageComponent, UserDetailsHeaderComponent, UserAlbumsComponent],
  imports: [CommonModule, UserDetailsRoutingModule, SharedModule],
})
export class UserDetailsModule {}
