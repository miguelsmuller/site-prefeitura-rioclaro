import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LibrariesModule } from '@core/libraries.module';
import { LayoutModule } from '@core/layout.module';

import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { GridPublicationsComponent } from './components/grid-publications/grid-publications.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, LibrariesModule, LayoutModule],
  declarations: [RelativeTimePipe, SafePipe, GridPublicationsComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    LibrariesModule,
    LayoutModule,
    RelativeTimePipe,
    SafePipe,
    GridPublicationsComponent,
  ],
})
export class CoreModule {}
