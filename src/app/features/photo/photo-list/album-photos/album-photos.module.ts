import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPhotosRoutingModule } from './album-photos-routing.module';
import { AlbumPhotosPageComponent } from './components/page/album-photos-page.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AlbumPhotosFilterComponent } from './components/filter/album-photos-filter.component';
import { AlbumPhotosFilterContainerComponent } from './components/filter/container/album-photos-filter-container.component';
import { AlbumPhotosTitleComponent } from './components/title/album-photos-title.component';

@NgModule({
  declarations: [
    AlbumPhotosPageComponent,
    AlbumPhotosFilterComponent,
    AlbumPhotosFilterContainerComponent,
    AlbumPhotosTitleComponent,
  ],
  imports: [CommonModule, AlbumPhotosRoutingModule, SharedModule],
})
export class AlbumPhotosModule {}
