import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsPageComponent } from './page/post-details-page.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [PostDetailsPageComponent],
  imports: [CommonModule, PostDetailsRoutingModule, SharedModule],
})
export class PostDetailsModule {}
