import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPhotosPageComponent } from './components/page/all-photos-page.component';

const routes: Routes = [{ path: '', component: AllPhotosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllPhotosRoutingModule {}
