import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';

import { AffiliateComponent } from './affiliate.component';
import { AffiliateSpotlightComponent } from './affiliate-spotlight/affiliate-spotlight.component';
import { AffiliateStatsComponent } from './affiliate-stats/affiliate-stats.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AffiliateComponent,
        data: {
          title: 'Afiliada',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
  declarations: [AffiliateComponent, AffiliateSpotlightComponent, AffiliateStatsComponent],
})
export class AffiliateModule {}
