import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingCardComponent } from './components/booking-card/booking-card.component';
import { BookingPassengersComponent } from './components/booking-passengers/booking-passengers.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';

@NgModule({
  declarations: [
    BookingCardComponent,
    BookingPassengersComponent,
    BookingPageComponent,
    SummaryPagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class BookingModule {}
