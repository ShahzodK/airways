import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSearchForm, selectSearchFlight } from 'app/redux/selectors/flights.selectors';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-booking-ticket-page',
  templateUrl: './booking-ticket-page.component.html',
  styleUrls: ['./booking-ticket-page.component.scss']
})
export class BookingTicketPageComponent implements OnInit {

  public searchForm$ = this.store.select(selectSearchForm);

  public searchFlight$ = this.store.select(selectSearchFlight);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.searchFlight$.pipe(retry(2)).subscribe(x => console.log(x))
  }
}
