import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { XyzComponent } from './event/xyz/xyz.component';
import { PqrComponent } from './pqr.component';
import { JklComponent } from './abc/jkl.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    XyzComponent,
    PqrComponent,
    JklComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
