import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { NgxPictureModule, CLOUDINARY_CONFIG } from 'ngx-picture';

import { AppComponent } from './app.component';
import { HeaderTopComponent } from './common/components/header-top/header-top.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HomeSearchComponent } from './common/features/home-search/home-search.component';
import { HomeNewsComponent } from './common/features/home-news/home-news.component';

import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderComponent,
    FooterComponent,
    HomeSearchComponent,
    HomeNewsComponent,
    HomeComponent,
    ContentComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
