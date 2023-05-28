import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FlightsEffects } from './redux/effects/flights.effects';
import { UserOrdersEffects } from './redux/effects/user-oders.effects';
import { flightsReducer } from './redux/reducers/flights.reducer';
import { UserModule } from './user/user.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    StoreModule.forRoot({ app: flightsReducer }),
    EffectsModule.forRoot([FlightsEffects, UserOrdersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
