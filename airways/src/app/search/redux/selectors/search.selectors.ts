import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISearchState } from '../search.model';

export const selectSearchFlightState = createFeatureSelector<ISearchState>('flight');

export const selectSearchFlight = createSelector(
  selectSearchFlightState,
  (state) => state.flight
)

export const selectSearchForm = createSelector(
  selectSearchFlightState,
  (state) => state.searchForm
)