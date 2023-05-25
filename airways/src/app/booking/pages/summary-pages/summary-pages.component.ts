import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { selectPassengers } from 'app/redux/selectors/flights.selectors';
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

  constructor(
    private store: Store,
    private router: Router,
    private colorScheme: ColorSchemeService
  ) {
    this.colorScheme.changeSchemeFalse();
    this.colorScheme.forPageSummary();
  }

  ngOnInit(): void {
    this.passengers$ = this.store
      .select(selectPassengers)
      .subscribe((data) => (this.passengers = data));
  }

  ngOnDestroy(): void {
    this.passengers$.unsubscribe();
  }

  toBack() {
    this.router.navigateByUrl('/booking');
    this.colorScheme.forPageBooking();
  }
}
