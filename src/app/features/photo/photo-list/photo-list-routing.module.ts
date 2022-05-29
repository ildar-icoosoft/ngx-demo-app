import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListPageComponent } from './components/page/photo-list-page.component';

const routes: Routes = [{ path: '', component: PhotoListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoListRoutingModule {}
