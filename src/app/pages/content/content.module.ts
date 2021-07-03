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
      },
    ]),
  ],
  declarations: [ContentComponent],
})
export class ContentModule {}
