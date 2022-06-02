import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsPageComponent } from './components/photo-details-page/photo-details-page.component';

const routes: Routes = [{ path: '', component: PhotoDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoDetailsRoutingModule {}
