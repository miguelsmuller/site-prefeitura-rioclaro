import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeNewsComponent } from './home-news/home-news.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  declarations: [HomeComponent, HomeSearchComponent, HomeNewsComponent],
})
export class HomeModule {}
