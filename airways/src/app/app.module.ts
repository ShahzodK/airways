import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SearchModule } from '../app/search/search.module';
import { flightsReducer } from './redux/reducers/flights.reducer';
import { FlightsEffects } from './redux/effects/flights.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SearchModule,
    StoreModule.forRoot({ app: flightsReducer }),
    EffectsModule.forRoot([FlightsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
