import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatepostComponent } from './createpost/createpost.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//
export class AppModule { }
