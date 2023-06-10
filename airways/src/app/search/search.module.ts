import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';

import { PassengerCounterComponent } from './components/passenger-counter/passenger-counter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TotalPassengersPipe } from './pipes/totalPassengers.pipe';
import { MainRoutingModule } from './search.routing.module';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from './consts/my_date';

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
  ],
  exports: [
    MainPageComponent,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SearchModule {}
