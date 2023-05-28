import { HttpClient, HttpHeaders } from '@angular/common/http';
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
import {
  initialUserOrders,
  saveOrders,
} from 'app/redux/actions/orders.actions';
import {
  costTrip,
  flightDetailsDeparture,
  flightDetailsDestination,
  order,
  passengersDetailsDeparture,
  passengersDetailsDestination,
  selectPassengers,
} from 'app/redux/selectors/flights.selectors';
import { IUser } from 'app/user/model/user.interface';
import { AuthService } from 'app/user/services/auth.service';
import { catchError, of, Subscription } from 'rxjs';

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
    private auth: AuthService,
    private http: HttpClient
  ) {
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
      this.router.navigateByUrl('/user-account');
      this.colorScheme.forCart();
    } else {
      this.router.navigateByUrl('/search');
      this.colorScheme.forPageMain();
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
    this.colorScheme.forCart();
  }

  createUserOrder() {
    this.order.price = this.getTotalCost(this.costTrip);
    const id = localStorage.getItem('userAirwaysId');
    const token = localStorage.getItem('userAirwaysToken') ?? '';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:3000/users/${id}`;
    this.http
      .get<IUser>(url, { headers })
      .pipe(
        catchError((error) => {
          if (error.statusText === 'Unauthorized') {
            this.auth.logOut();
          }
          return of();
        })
      )
      .subscribe((user: IUser) => {
        const orders = user.orders;
        const userOrder = {
          ...this.order,
          flightDetailsDeparture: this.flightDetailsDeparture,
          passengersDetailsDeparture: this.passengersDetailsDeparture,
          flightDetailsDestination: this.flightDetailsDestination,
          passengersDetailsDestination: this.passengersDetailsDestination,
          costTrip: this.costTrip,
        };
        if (orders) {
          orders.push(userOrder);
          this.http.patch(url, { orders }, { headers }).subscribe(() => {
            this.store.dispatch(initialUserOrders());
          });
        } else {
          this.http
            .patch(url, { orders: [userOrder] }, { headers })
            .subscribe(() => {
              this.store.dispatch(initialUserOrders());
            });
        }
      });
  }
}
