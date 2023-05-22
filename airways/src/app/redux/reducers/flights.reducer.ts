import { createReducer, on } from '@ngrx/store';
import * as FlightActions from '../actions/flights.actions'
import { IFlightsState } from '../flightState.model';

export const initialState: IFlightsState = {
  flights: [],
  flights_name: [],
  flight: [{
    flight_name: 'Dublin-Dubai',
    flight_no: 'AR2345',
    departure: 'Dublin',
    destination: 'Dubai',
    seats_amount: 123,
    columns: 4,
    rows: [],
    dates: [{
      date: new Date('10/08/2023'),
      prices: {
        adult: '98$',
        child: '101$',
        infant: '102$'
      },
      departure_time: "13:00",
      arrival_time: "18:00",
      duration: "5h 00m"
    },
    {
      date: new Date('10/07/2023'),
      prices: {
        adult: '90$',
        child: '95$',
        infant: '100$'
      },
      departure_time: "13:00",
      arrival_time: "18:00",
      duration: "5h 00m"
  },
  {
    date: new Date('10/06/2023'),
    prices: {
      adult: '92$',
      child: '93$',
      infant: '97$'
    },
    departure_time: "13:00",
    arrival_time: "18:00",
    duration: "5h 00m"
  },
  {
    date: new Date('10/10/2023'),
    prices: {
      adult: '98$',
      child: '101$',
      infant: '102$'
    },
    departure_time: "13:00",
    arrival_time: "18:00",
    duration: "5h 00m"
  },
  {
    date: new Date('11/10/2023'),
    prices: {
      adult: '98$',
      child: '101$',
      infant: '102$'
    },
    departure_time: "13:00",
    arrival_time: "18:00",
    duration: "5h 00m"
  }
]
  }],
  searchForm: {
    tripType: '1',
    departure: 'Dublin',
    destination: 'Dubai',
    start: new Date('10/05/2023'),
    end: new Date(),
    passengers: ["1 adult", "1 children", "2 infant"]
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
