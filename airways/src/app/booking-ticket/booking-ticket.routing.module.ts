import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingTicketPageComponent } from './pages/booking-ticket-page/booking-ticket-page.component';

const routes: Routes = [
  { path: '', component: BookingTicketPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingTicketRoutingModule { }
