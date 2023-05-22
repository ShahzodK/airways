import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { BookingTicketPageComponent } from './pages/booking-ticket-page/booking-ticket-page.component';
import { BookingTicketRoutingModule } from './booking-ticket.routing.module'
import { TicketSelectionComponent } from './components/ticket-selection/ticket-selection.component';
import { FlightInfoComponent } from './components/flight-info/flight-info.component';



@NgModule({
  declarations: [
    BookingTicketPageComponent,
    TicketSelectionComponent,
    FlightInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingTicketRoutingModule
  ]
})
export class BookingTicketModule { }
