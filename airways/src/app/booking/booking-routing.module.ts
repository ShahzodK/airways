import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'app/core/guards/auth.guard';
import { EmptyRequestGuard } from 'app/core/guards/empty-request';

import { BookingCartPagesComponent } from './pages/booking-cart-pages/booking-cart-pages.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { BookingTicketPageComponent } from './pages/booking-ticket-page/booking-ticket-page.component';
import { SummaryPagesComponent } from './pages/summary-pages/summary-pages.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPageComponent,
    canActivate: [EmptyRequestGuard, AuthGuard],
  },
  {
    path: 'summary',
    component: SummaryPagesComponent,
    canActivate: [EmptyRequestGuard, AuthGuard],
  },
  {
    path: 'tickets',
    component: BookingTicketPageComponent,
    canActivate: [EmptyRequestGuard],
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
