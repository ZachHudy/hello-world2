import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetalComponent } from './metal.component';
import { MetalService } from './metal.service';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MetalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService,
    MetalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
