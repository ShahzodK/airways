import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchModule } from '../app/search/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    CoreModule,
    SearchModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
