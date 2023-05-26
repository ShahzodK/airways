import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingCartPagesComponent } from './pages/booking-cart-pages/booking-cart-pages.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { BookingTicketPageComponent } from './pages/booking-ticket-page/booking-ticket-page.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';

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
  },
  {
    path: 'cart',
    component: BookingCartPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
