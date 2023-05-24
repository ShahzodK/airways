import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';
import { BookingTicketPageComponent } from './pages/booking-ticket-page/booking-ticket-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPageComponent,
  },
  {
    path: 'summary',
    component: SummaryPagesComponent,
  },
  {
     path: 'tickets',
    component: BookingTicketPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
