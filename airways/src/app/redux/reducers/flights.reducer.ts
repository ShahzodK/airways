import { createReducer, on } from '@ngrx/store';
import * as FlightActions from '../actions/flights.actions'
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: [],
  flights_name: [],
  flight: [],
  searchForm: {
    tripType: '',
    departure: '',
    destination: '',
    start: new Date(),
    end: new Date(),
    passengers: []
  },
  selectedTickets: {
    departure: {
      arrival_time: '',
      date: new Date(),
      departure_time: '',
      disabled: true,
      duration: '',
      price: '',
      flight_no: '',
      passengers: []
    },
    destination: {
      arrival_time: '',
      date: new Date(),
      departure_time: '',
      disabled: true,
      duration: '',
      price: '',
      flight_no: '',
      passengers: []
    }
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
  })),
  on(FlightActions.saveSelectedTickets, (state, { departureTicket, destinationTicket }): IFlightsState => ({
    ...state,
    selectedTickets: {departure: departureTicket, destination: destinationTicket},
  }))
)
