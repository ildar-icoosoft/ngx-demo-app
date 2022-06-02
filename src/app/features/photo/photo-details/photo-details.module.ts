import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoDetailsRoutingModule } from './photo-details-routing.module';
import { PhotoDetailsPageComponent } from './components/photo-details-page/photo-details-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { PhotoDetailsTitleComponent } from './components/photo-details-title/photo-details-title.component';

@NgModule({
  declarations: [PhotoDetailsPageComponent, PhotoDetailsTitleComponent],
  imports: [CommonModule, PhotoDetailsRoutingModule, SharedModule],
})
export class PhotoDetailsModule {}
