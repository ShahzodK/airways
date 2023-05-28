import { createReducer, on } from '@ngrx/store';

import * as FlightActions from '../actions/flights.actions';
import {
  initialUserOrders,
  saveOrders,
  saveUserOrders,
} from '../actions/orders.actions';
import { savePassengersForm } from '../actions/passengers.actions';
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  orders: JSON.parse(localStorage.getItem('airwaysOrders') ?? '[]'),
  flights: [],
  flights_name: [],
  flight: [],
  searchForm: {
    tripType: '',
    departure: '',
    destination: '',
    start: new Date(),
    end: new Date(),
    passengers: ['0 Adults', '0 Children', '0 Infants'],
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
      arrival_time: '',
      date: new Date(),
      departure_time: '',
      disabled: true,
      duration: '',
      price: '',
      flight_no: '',
      passengers: [],
      seats: [],
      reserved_tickets: [],
    },
    destination: {
      arrival_time: '',
      date: new Date(),
      departure_time: '',
      disabled: true,
      duration: '',
      price: '',
      flight_no: '',
      passengers: [],
      seats: [],
      reserved_tickets: [],
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
  ),
  on(
    saveOrders,
    (state, { orders }): IFlightsState => ({
      ...state,
      orders,
    })
  ),
  on(
    initialUserOrders,
    (state): IFlightsState => ({
      ...state,
      userOrders: [],
    })
  ),
  on(
    saveUserOrders,
    (state, { userOrders }): IFlightsState => ({
      ...state,
      userOrders: userOrders,
    })
  )
);
