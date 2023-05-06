import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MainService } from './../../services/main.service';
import * as SearchActions from '../actions/search.actions'



@Injectable({
  providedIn: 'root',
})

export class SearchEffects {

  constructor(
    private actions$: Actions,
    private mainService: MainService,
    private store: Store
  ) {}

  public sendSearchForm = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(SearchActions.sendSearchForm),
        switchMap(({ flight }) => {
          this.store.dispatch(SearchActions.saveSearchForm({ searchForm: flight }))
          return this.mainService.searchFlight(flight)
          }),
        map((flight) => {
          return SearchActions.sendSearchFormSuccess({ flight })
        }),
        catchError(() => of(SearchActions.sendSearchFormFailed))
      )
  })
}
