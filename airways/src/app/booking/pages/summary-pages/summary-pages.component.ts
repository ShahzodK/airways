import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  ICostTrip,
  IFlightDetails,
  IOrder,
  IPassengersDetails,
} from 'app/booking/models/flightDetails.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { FormatParamService } from 'app/core/services/format-param.service';
import { saveOrders } from 'app/redux/actions/orders.actions';
import {
  costTrip,
  flightDetailsDeparture,
  flightDetailsDestination,
  order,
  passengersDetailsDeparture,
  passengersDetailsDestination,
  selectPassengers,
} from 'app/redux/selectors/flights.selectors';
import { AuthService } from 'app/user/services/auth.service';
import { Subscription } from 'rxjs';

import { IPassenger } from '../../models/passengersForm.model';

@Component({
  selector: 'app-summary-pages',
  templateUrl: './summary-pages.component.html',
  styleUrls: ['./summary-pages.component.scss'],
})
export class SummaryPagesComponent implements OnInit, OnDestroy {
  passengers$!: Subscription;

  passengers!: IPassenger[];

  flightDetailsDeparture$!: Subscription;

  flightDetailsDeparture!: IFlightDetails;

  flightDetailsDestination$!: Subscription;

  flightDetailsDestination!: IFlightDetails | null;

  passengersDetailsDeparture$!: Subscription;

  passengersDetailsDeparture!: IPassengersDetails[];

  passengersDetailsDestination$!: Subscription;

  passengersDetailsDestination!: IPassengersDetails[] | null;

  costTrip$!: Subscription;

  costTrip!: ICostTrip[];

  order$!: Subscription;

  order!: IOrder;

  constructor(
    public store: Store,
    private router: Router,
    private colorScheme: ColorSchemeService,
    public format: FormatParamService,
    private auth: AuthService
  ) {
    this.colorScheme.changeSchemeFalse();
    this.colorScheme.forPageSummary();
  }

  ngOnInit(): void {
    this.passengers$ = this.store
      .select(selectPassengers)
      .subscribe((data) => (this.passengers = data));

    this.flightDetailsDeparture$ = this.store
      .select(flightDetailsDeparture)
      .subscribe((data) => (this.flightDetailsDeparture = data));

    this.flightDetailsDestination$ = this.store
      .select(flightDetailsDestination)
      .subscribe((data) => (this.flightDetailsDestination = data));

    this.passengersDetailsDeparture$ = this.store
      .select(passengersDetailsDeparture)
      .subscribe((data) => (this.passengersDetailsDeparture = data));

    this.passengersDetailsDestination$ = this.store
      .select(passengersDetailsDestination)
      .subscribe((data) => (this.passengersDetailsDestination = data));

    this.costTrip$ = this.store
      .select(costTrip)
      .subscribe((data) => (this.costTrip = data));

    this.order$ = this.store
      .select(order)
      .subscribe((data) => (this.order = data));
  }

  ngOnDestroy(): void {
    this.passengers$.unsubscribe();
    this.flightDetailsDeparture$.unsubscribe();
    this.flightDetailsDestination$.unsubscribe();
    this.passengersDetailsDeparture$.unsubscribe();
    this.passengersDetailsDestination$.unsubscribe();
    this.costTrip$.unsubscribe();
    this.order$.unsubscribe();
  }

  toBack() {
    this.router.navigateByUrl('/booking');
    this.colorScheme.forPageBooking();
  }

  getTotalCost(arr: ICostTrip[]) {
    return arr.reduce((ac, el) => ac + el.total, 0);
  }

  buyNow() {
    if (this.auth.isUserLoggedIn()) {
      this.createUserOrder();
      this.router.navigateByUrl('/search');
      this.colorScheme.changeSchemeTrue();
    } else {
      this.router.navigateByUrl('/search');
      this.colorScheme.changeSchemeTrue();
    }
  }

  addToCart() {
    const ordersStorage = localStorage.getItem('airwaysOrders');
    this.order.price = this.getTotalCost(this.costTrip);
    if (ordersStorage) {
      const orders = JSON.parse(ordersStorage);
      orders.push(this.order);
      this.store.dispatch(saveOrders({ orders }));
      localStorage.setItem('airwaysOrders', JSON.stringify(orders));
    } else {
      localStorage.setItem('airwaysOrders', JSON.stringify([this.order]));
      this.store.dispatch(saveOrders({ orders: [this.order] }));
    }
    this.router.navigateByUrl('/booking/cart');
  }

  createUserOrder() {
    //отправить на бек заказ
  }
}
