import { MainService } from './../../search/services/main.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as FlightsActions from '../actions/flights.actions'

@Injectable()

export class FlightsEffects {

  constructor(
    private actions$: Actions,
    private mainService: MainService,
    private store: Store
    ) {}

    public fetchFlights$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(FlightsActions.fetchFlightsName),
          switchMap(() => this.mainService.getFlightsName()),
          map((flights_name) => {
              return FlightsActions.fetchFlightsNameSuccess({ flights_name })
          }),
          catchError(() => of(FlightsActions.fetchFlightsNameFailed))
        )
    })

    public sendSearchForm = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(FlightsActions.sendSearchForm),
          switchMap(({ flight }) => {
            this.store.dispatch(FlightsActions.saveSearchForm({ searchForm: flight }))
            return this.mainService.searchFlight(flight)
            }),
          map((flight) => {
            return FlightsActions.sendSearchFormSuccess({ flight })
          }),
          catchError(() => of(FlightsActions.sendSearchFormFailed))
        )
    })
}
