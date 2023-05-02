import { createAction, props } from '@ngrx/store';
import { IFlights } from '../../shared/models/flights.model';

export const fetchFlights = createAction (
  '[FLIGHTS] Fetch Flights'
);

export const fetchFlightsSuccess = createAction (
  '[FLIGHTS] Fetch Flights Success',
  props<{ flights: IFlights[] }>(),
)

export const fetchFlightsFailed = createAction (
  '[FLIGHTS] Fetch Flights Failed',
)