import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContentComponent,
        data: {
          title: 'Conteudo',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
  declarations: [ContentComponent],
})
export class ContentModule {}
