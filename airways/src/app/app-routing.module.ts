import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((mod) => mod.SearchModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((mod) => mod.BookingModule),
  },
  {
    path: 'user-account',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
