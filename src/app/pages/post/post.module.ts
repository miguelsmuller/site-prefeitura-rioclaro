import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';

import { PostComponent } from './post.component';

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
