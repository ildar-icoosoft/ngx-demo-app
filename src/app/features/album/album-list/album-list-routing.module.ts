import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListPageComponent } from './components/page/album-list-page.component';

const routes: Routes = [{ path: '', component: AlbumListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumListRoutingModule {}
