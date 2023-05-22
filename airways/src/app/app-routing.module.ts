import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/search', pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module')
    .then((mod) => mod.SearchModule),
  },
  {
    path: 'booking-ticket',
    loadChildren: () => import('./booking-ticket/booking-ticket.module')
    .then((mod) => mod.BookingTicketModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
