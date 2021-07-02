import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AffiliateComponent } from './affiliate.component';
import { AffiliateSpotlightComponent } from './affiliate-spotlight/affiliate-spotlight.component';
import { AffiliateStatsComponent } from './affiliate-stats/affiliate-stats.component';

import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AffiliateComponent,
      },
    ]),
  ],
  declarations: [AffiliateComponent, AffiliateSpotlightComponent, AffiliateStatsComponent],
})
export class AffiliateModule {}
