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

export const passengersDetailsDeparture = createSelector(
  selectFlightsState,
  (state) => {
    const array: IPassengersDetails[] = [];
    const seatsDeparture = state.selectedTickets.departure.seats;
    const adultsCount = state.searchForm.passengers.reduce((ac, el) => {
      const [count, name] = el.split(' ');
      if (name === 'Adults' || name === 'Children') {
        return +count + ac;
      } else {
        return ac;
      }
    }, 0);
    state.passengersForm.passengers.forEach((passenger, index) => {
      const obj: IPassengersDetails = {
        fullName: `${passenger.firstName} ${passenger.lastName}`,
        baggage: passenger.baggage,
        seat: null,
      };
      if (index < adultsCount) {
        obj.seat = seatsDeparture[index];
      }
      array.push(obj);
    });
    return array;
  }
);

export const passengersDetailsDestination = createSelector(
  selectFlightsState,
  (state) => {
    const array: IPassengersDetails[] = [];
    const seatsDestination = state.selectedTickets.destination?.seats;
    if (seatsDestination && seatsDestination.length !== 0) {
      const adultsCount = state.searchForm.passengers.reduce((ac, el) => {
        const [count, name] = el.split(' ');
        if (name === 'Adults' || name === 'Children') {
          return +count + ac;
        } else {
          return ac;
        }
      }, 0);
      state.passengersForm.passengers.forEach((passenger, index) => {
        const obj: IPassengersDetails = {
          fullName: `${passenger.firstName} ${passenger.lastName}`,
          baggage: passenger.baggage,
          seat: null,
        };
        if (index < adultsCount) {
          obj.seat = seatsDestination[index];
        }
        array.push(obj);
      });
      return array;
    } else return null;
  }
);

export const costTrip = createSelector(selectFlightsState, (state) => {
  let cost = 0;
  if (state.selectedTickets.destination?.price) {
    cost += +state.selectedTickets.destination.price;
  }
  cost += +state.selectedTickets.departure.price;
  return state.searchForm.passengers.map((passengers) => {
    // eslint-disable-next-line prefer-const
    let [count, type] = passengers.split(' ');
    let fare = cost * +count;
    if (type === 'Children') {
      fare *= 0.8;
      type = 'Child';
    }
    if (type === 'Infants') {
      fare *= 0.5;
      type = 'Infant';
    }
    return {
      count: count,
      type,
      fare,
      tax: fare * 0.4,
      total: fare * 1.4,
    };
  });
});
