import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppLibrariesModule } from './app-libraries.module';
import { AppRoutingModule } from './app-routing.module';

import { NgxPictureModule, CLOUDINARY_CONFIG } from 'ngx-picture';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './common/components/header-top/header-top.component';
import { HeaderComponent } from './common/components/header/header.component';
import { NavigationComponent } from './common/components/navigation/navigation.component';
import { NavigationToogleComponent } from './common/components/navigation/navigation-toogle/navigation-toogle.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { FooterSocialComponent } from './common/components/footer/footer-social/footer-social.component';
import { HomeSearchComponent } from './common/features/home-search/home-search.component';
import { HomeNewsComponent } from './common/features/home-news/home-news.component';

import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PostComponent } from './pages/post/post.component';
import { AffiliateComponent } from './pages/affiliate/affiliate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationToogleComponent,
    FooterComponent,
    FooterSocialComponent,
    HomeSearchComponent,
    HomeNewsComponent,
    HomeComponent,
    ContentComponent,
    PostComponent,
    AffiliateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppLibrariesModule,
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
