import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingTicketPageComponent } from 'app/booking/pages/booking-ticket-page/booking-ticket-page.component';
import { SharedModule } from 'app/shared/shared.module';

import { FlightInfoComponent } from '../shared/components/flight-info/flight-info.component';
import { BookingRoutingModule } from './booking-routing.module';
import { TicketSelectionComponent } from './components/ticket-selection/ticket-selection.component';
import { BookingCartPagesComponent } from './pages/booking-cart-pages/booking-cart-pages.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';

@NgModule({
  declarations: [
    BookingPageComponent,
    SummaryPagesComponent,
    BookingTicketPageComponent,
    TicketSelectionComponent,
    FlightInfoComponent,
    BookingCartPagesComponent,
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
