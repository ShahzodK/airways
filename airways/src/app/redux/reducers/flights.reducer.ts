import { createReducer, on } from '@ngrx/store';

import * as FlightActions from '../actions/flights.actions';
import { savePassengersForm } from '../actions/passengers.actions';
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: [],
  flights_name: [],
  flight: [],
  searchForm: {
    tripType: '',
    departure: 'Дублин',
    destination: 'Прага',
    start: new Date(),
    end: new Date(),
    passengers: [],
  },
  passengersForm: {
    passengers: [],
    contacts: {
      country: '',
      phone: '',
      email: '',
      cardNumber: '',
    },
  },
  selectedTickets: {
    departure: {
      arrival_time: '18.20',
      date: new Date(),
      departure_time: '65.25',
      disabled: true,
      duration: '',
      price: '',
      flight_no: 'AS3642',
      passengers: [],
    },
    destination: {
      arrival_time: '47.56',
      date: new Date(),
      departure_time: '33.12',
      disabled: true,
      duration: '',
      price: '',
      flight_no: 'AS0000',
      passengers: [],
    },
  },
};

export const flightsReducer = createReducer(
  initialState,
  on(
    FlightActions.fetchFlightsNameSuccess,
    (state, { flights_name }): IFlightsState => ({
      ...state,
      flights_name,
    })
  ),
  on(
    FlightActions.sendSearchFormSuccess,
    (state, { flight }): IFlightsState => ({
      ...state,
      flight,
    })
  ),
  on(
    FlightActions.saveSearchForm,
    (state, { searchForm }): IFlightsState => ({
      ...state,
      searchForm,
    })
  ),
  on(
    savePassengersForm,
    (state, { passengersForm }): IFlightsState => ({
      ...state,
      passengersForm,
    })
  ),
  on(
    FlightActions.saveSelectedTickets,
    (state, { departureTicket, destinationTicket }): IFlightsState => ({
      ...state,
      selectedTickets: {
        departure: departureTicket,
        destination: destinationTicket,
      },
    })
  )
);
