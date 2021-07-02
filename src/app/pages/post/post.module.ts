import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post.component';

import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent,
      },
    ]),
  ],
  declarations: [PostComponent],
})
export class PostModule {}
