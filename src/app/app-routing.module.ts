import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'post/:id',
        loadChildren: () =>
          import('./features/post/post-details/post-details.module').then(
            (m) => m.PostDetailsModule,
          ),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./features/post/post-list/post-list.module').then((m) => m.PostListModule),
      },
      {
        path: 'albums',
        loadChildren: () =>
          import('./features/album/album-list/album-list.module').then((m) => m.AlbumListModule),
      },
      {
        path: 'album/:id',
        loadChildren: () =>
          import('./features/photo/photo-list/album-photos/album-photos.module').then(
            (m) => m.AlbumPhotosModule,
          ),
      },
      {
        path: 'photos',
        loadChildren: () =>
          import('./features/photo/photo-list/all-photos/all-photos.module').then(
            (m) => m.AllPhotosModule,
          ),
      },
      {
        path: 'photo/:id',
        loadChildren: () =>
          import('./features/photo/photo-details/photo-details.module').then(
            (m) => m.PhotoDetailsModule,
          ),
      },
      {
        path: 'user/:id',
        loadChildren: () =>
          import('./features/user/user-details/user-details.module').then(
            (m) => m.UserDetailsModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
