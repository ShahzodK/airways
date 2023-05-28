import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCartPagesComponent } from './pages/user-cart-pages/user-cart-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UserCartPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
