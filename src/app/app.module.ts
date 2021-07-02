import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LibrariesModule } from './core/libraries.module';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './core/layout.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LibrariesModule, CoreModule, LayoutModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
