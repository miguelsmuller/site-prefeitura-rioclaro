import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderTopComponent } from './components/header-top/header-top.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationToogleComponent } from './components/navigation/navigation-toogle/navigation-toogle.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LayoutComponent,
    HeaderTopComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationToogleComponent,
    FooterComponent,
    FooterSocialComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
