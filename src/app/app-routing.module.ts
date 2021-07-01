import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PostComponent } from './pages/post/post.component';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'affiliate',
    component: AffiliateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
