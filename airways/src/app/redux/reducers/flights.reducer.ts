import { createReducer, on } from '@ngrx/store';
import * as FlightActions from '../actions/flights.actions'
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: [],
  flights_name: [],
  flight: {
    flight_name: '',
    flight_no: '',
    seats_amount: 0,
    columns: 0,
    rows: [],
    dates: [{
      date: new Date(),
      prices: {
        adult: '',
        child: '',
        infant: ''
      }
    }]
  },
  searchForm: {
    tripType: '',
    departure: '',
    destination: '',
    start: new Date(),
    end: new Date(),
    passengers: []
  }
}

export const flightsReducer = createReducer(
  initialState,
  on(FlightActions.fetchFlightsNameSuccess, (state, { flights_name }): IFlightsState => ({
    ...state,
    flights_name
  })),
  on(FlightActions.sendSearchFormSuccess, (state, { flight }): IFlightsState => ({
    ...state,
    flight
  })),
  on(FlightActions.saveSearchForm, (state, { searchForm }): IFlightsState => ({
    ...state,
    searchForm
  }))
)
