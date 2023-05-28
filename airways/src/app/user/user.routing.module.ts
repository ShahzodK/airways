import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { UserCartPagesComponent } from './pages/user-cart-pages/user-cart-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UserCartPagesComponent,
  },
  {
    path: 'summary',
    component: OrderSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
