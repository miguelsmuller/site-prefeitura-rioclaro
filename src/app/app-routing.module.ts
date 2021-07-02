import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then((m) => m.ContentModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'affiliate',
    loadChildren: () => import('./pages/affiliate/affiliate.module').then((m) => m.AffiliateModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
