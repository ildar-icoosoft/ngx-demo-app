import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumDetailsRoutingModule } from './album-details-routing.module';
import { AlbumDetailsComponent } from './album-details.component';

@NgModule({
  declarations: [AlbumDetailsComponent],
  imports: [CommonModule, AlbumDetailsRoutingModule],
})
export class AlbumDetailsModule {}
