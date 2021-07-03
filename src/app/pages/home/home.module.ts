import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';

import { HomeComponent } from './home.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeNewsComponent } from './home-news/home-news.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Página Inicial',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
  declarations: [HomeComponent, HomeSearchComponent, HomeNewsComponent],
})
export class HomeModule {}
