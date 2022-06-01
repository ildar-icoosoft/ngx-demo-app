import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsPageComponent } from './page/post-details-page.component';

const routes: Routes = [{ path: '', component: PostDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailsRoutingModule {}
