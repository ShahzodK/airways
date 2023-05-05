import { createReducer, on } from '@ngrx/store';
import * as FlightActions from '../actions/flights.actions'
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: [],
  flights_name: []
}

export const flightsReducer = createReducer(
  initialState,
  on(FlightActions.fetchFlightsNameSuccess, (state, { flights_name }): IFlightsState => ({
    ...state,
    flights_name
  }))
)
