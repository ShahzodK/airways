import { createReducer, on } from '@ngrx/store';
import * as FlightActions from '../actions/flights.actions'
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: []
}

export const flightsReducer = createReducer(
  initialState,
  on(FlightActions.fetchFlightsSuccess, (state, { flights }): IFlightsState => ({
    ...state,
    flights
  }))
)