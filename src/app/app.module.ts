import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RfTileModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RfTileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
