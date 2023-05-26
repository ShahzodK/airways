import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  ICostTrip,
  IFlightDetails,
  IPassengersDetails,
} from 'app/booking/models/flightDetails.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { FormatParamService } from 'app/core/services/format-param.service';
import {
  costTrip,
  flightDetailsDeparture,
  flightDetailsDestination,
  passengersDetailsDeparture,
  passengersDetailsDestination,
  selectPassengers,
  typeTrip,
} from 'app/redux/selectors/flights.selectors';
import { Observable, Subscription } from 'rxjs';

import { IPassenger } from '../../models/passengersForm.model';

@Component({
  selector: 'app-summary-pages',
  templateUrl: './summary-pages.component.html',
  styleUrls: ['./summary-pages.component.scss'],
})
export class SummaryPagesComponent implements OnInit, OnDestroy {
  passengers$!: Subscription;

  passengers!: IPassenger[];

  typeTrip$!: Observable<string>;

  flightDetailsDeparture$!: Observable<IFlightDetails>;

  flightDetailsDestination$!: Observable<IFlightDetails | null>;

  passengersDetailsDeparture$!: Observable<IPassengersDetails[]>;

  passengersDetailsDestination$!: Observable<IPassengersDetails[] | null>;

  costTrip$!: Observable<ICostTrip[]>;

  constructor(
    public store: Store,
    private router: Router,
    private colorScheme: ColorSchemeService,
    public format: FormatParamService
  ) {
    this.colorScheme.changeSchemeFalse();
    this.colorScheme.forPageSummary();
  }

  ngOnInit(): void {
    this.passengers$ = this.store
      .select(selectPassengers)
      .subscribe((data) => (this.passengers = data));

    this.typeTrip$ = this.store.select(typeTrip);
    this.flightDetailsDeparture$ = this.store.select(flightDetailsDeparture);
    this.flightDetailsDestination$ = this.store.select(
      flightDetailsDestination
    );
    this.passengersDetailsDeparture$ = this.store.select(
      passengersDetailsDeparture
    );
    this.passengersDetailsDestination$ = this.store.select(
      passengersDetailsDestination
    );
    this.costTrip$ = this.store.select(costTrip);
  }

  ngOnDestroy(): void {
    this.passengers$.unsubscribe();
  }

  toBack() {
    this.router.navigateByUrl('/booking');
    this.colorScheme.forPageBooking();
  }

  getTotalCost(arr: ICostTrip[]) {
    return arr.reduce((ac, el) => ac + el.total, 0);
  }
}
