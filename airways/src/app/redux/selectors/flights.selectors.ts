import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPassengersDetails } from 'app/booking/models/flightDetails.model';

import { IFlightsState } from '../flightState.model';

export const selectFlightsState = createFeatureSelector<IFlightsState>('app');

export const selectFlightsName = createSelector(
  selectFlightsState,
  (state) => state.flights_name
);

export const selectSearchFlight = createSelector(
  selectFlightsState,
  (state) => state.flight
);

export const selectSearchForm = createSelector(
  selectFlightsState,
  (state) => state.searchForm
);

export const selectPassengers = createSelector(
  selectFlightsState,
  (state) => state.passengersForm.passengers
);

export const typeTrip = createSelector(
  selectFlightsState,
  (state) => state.searchForm.tripType
);

export const flightDetailsDeparture = createSelector(
  selectFlightsState,
  (state) => ({
    number: state.selectedTickets.departure.flight_no,
    direction: `${state.searchForm.departure} - ${state.searchForm.destination}`,
    date: state.selectedTickets.departure.date,
    time: `${state.selectedTickets.departure.departure_time} - ${state.selectedTickets.departure.arrival_time}`,
  })
);

export const flightDetailsDestination = createSelector(
  selectFlightsState,
  (state) => {
    if (
      state.selectedTickets.destination
      // && state.selectedTickets.destination.duration
    ) {
      return {
        number: state.selectedTickets.destination.flight_no,
        direction: `${state.searchForm.destination} - ${state.searchForm.departure}`,
        date: state.selectedTickets.destination.date,
        time: `${state.selectedTickets.destination.departure_time} - ${state.selectedTickets.destination.arrival_time}`,
      };
    } else return null;
  }
);

export const passengersDetails = createSelector(selectFlightsState, (state) => {
  const array: IPassengersDetails[] = [];
  state.passengersForm.passengers.forEach((passenger) => {
    const obj = {
      fullName: `${passenger.firstName} ${passenger.lastName}`,
      seat: '33',
    };
    // if (passenger.)
    array.push(obj);
  });
  return array;
});

// arrival: {
//   number: state.selectedTickets.destination?.flight_no,
//   direction: state.searchForm.destination,
//   date: state.selectedTickets.destination?.date,
//   time: `${state.selectedTickets.destination?.departure_time} - ${state.selectedTickets.destination?.arrival_time}`,
// },
