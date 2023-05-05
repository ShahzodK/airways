import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IFlightsState } from '../flightState.model';

export const selectFlightsState = createFeatureSelector<IFlightsState>('app');

export const selectFlightsName = createSelector(
  selectFlightsState,
  (state) => state.flights_name
)
