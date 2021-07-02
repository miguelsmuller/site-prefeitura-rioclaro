import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AffiliateComponent } from './affiliate.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AffiliateComponent,
      },
    ]),
  ],
  declarations: [AffiliateComponent],
})
export class AffiliateModule {}
