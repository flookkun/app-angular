import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TromistComponent } from './tromist/tromist.component';
import { ToonComponent } from './toon/toon.component';

@NgModule({
  declarations: [
    AppComponent,
    TromistComponent,
    ToonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
