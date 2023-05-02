import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlightsState } from '../flightState.model';

export const selectFlightsState = createFeatureSelector<IFlightsState>('app');

export const selectFlights = createSelector(
  selectFlightsState,
  (state) => state.flights
)