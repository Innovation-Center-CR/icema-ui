import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// SERVICES

import { HeaderComponent } from './shared';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

// 3rd party dependencies
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SearchComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
