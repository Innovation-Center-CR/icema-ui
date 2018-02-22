import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// SERVICES

import { HeaderComponent } from './shared';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
