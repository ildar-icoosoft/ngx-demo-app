import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPhotosRoutingModule } from './all-photos-routing.module';
import { AllPhotosPageComponent } from './components/page/all-photos-page.component';
import { AllPhotosFilterContainerComponent } from './components/filter/container/all-photos-filter-container.component';
import { AllPhotosFilterComponent } from './components/filter/all-photos-filter.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    AllPhotosPageComponent,
    AllPhotosFilterContainerComponent,
    AllPhotosFilterComponent,
  ],
  imports: [CommonModule, AllPhotosRoutingModule, SharedModule],
})
export class AllPhotosModule {}
