import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NamesService } from './names.service';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
