import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import {
  selectSearchFlight,
  selectSearchForm,
} from 'app/redux/selectors/flights.selectors';

@Component({
  selector: 'app-booking-ticket-page',
  templateUrl: './booking-ticket-page.component.html',
  styleUrls: ['./booking-ticket-page.component.scss'],
})
export class BookingTicketPageComponent {
  public searchForm$ = this.store.select(selectSearchForm);

  public searchFlight$ = this.store.select(selectSearchFlight);

  constructor(private store: Store, private colorScheme: ColorSchemeService) {
    this.colorScheme.changeSchemeFalse();
    this.colorScheme.forPageBooking();
  }
}
