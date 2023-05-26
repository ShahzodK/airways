import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IOrder } from 'app/booking/models/flightDetails.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { ordersStorage } from 'app/redux/selectors/flights.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-cart-pages',
  templateUrl: './booking-cart-pages.component.html',
  styleUrls: ['./booking-cart-pages.component.scss'],
})
export class BookingCartPagesComponent implements OnInit {
  orders$!: Observable<IOrder[]>;

  constructor(private colorScheme: ColorSchemeService, private store: Store) {
    this.colorScheme.changeSchemeFalse();
  }

  ngOnInit(): void {
    this.orders$ = this.store.select(ordersStorage);
  }
}
