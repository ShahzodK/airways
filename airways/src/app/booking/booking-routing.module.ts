import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingPageComponent } from './pages/booking-page/booking-page.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
