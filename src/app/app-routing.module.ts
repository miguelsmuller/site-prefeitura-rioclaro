import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'content',
    loadChildren: () => import('@app/pages/content/content.module').then((m) => m.ContentModule),
  },
  {
    path: 'post',
    loadChildren: () => import('@app/pages/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'affiliate',
    loadChildren: () => import('@app/pages/affiliate/affiliate.module').then((m) => m.AffiliateModule),
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
