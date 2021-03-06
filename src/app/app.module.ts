import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SeriesComponent } from './series/series.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonEpisodesListComponent } from './season-episodes-list/season-episodes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    SeriesListComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent,
    SeriesComponent,
    EpisodeListComponent,
    SeasonListComponent,
    SeasonEpisodesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
