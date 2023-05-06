import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';

import { PassengerCounterComponent } from './components/passenger-counter/passenger-counter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TotalPassengersPipe } from './pipes/totalPassengers.pipe';
import { searchReducer } from './redux/reducers/search.reducers';
import { SearchEffects } from './redux/effects/search.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MainRoutingModule } from './search.routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    PassengerCounterComponent,
    TotalPassengersPipe,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature( 'flight', searchReducer ),
    EffectsModule.forFeature([SearchEffects]),
  ],
  exports: [
    MainPageComponent,
  ]
})
export class SearchModule {}
