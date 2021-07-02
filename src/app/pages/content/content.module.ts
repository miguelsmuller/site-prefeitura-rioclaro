import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [
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
