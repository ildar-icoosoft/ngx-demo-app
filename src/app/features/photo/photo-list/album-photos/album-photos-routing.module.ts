import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPhotosPageComponent } from './components/page/album-photos-page.component';

const routes: Routes = [{ path: '', component: AlbumPhotosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumPhotosRoutingModule {}
