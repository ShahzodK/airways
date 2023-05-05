import { createAction, props } from '@ngrx/store';

export const fetchFlightsName = createAction (
  '[FLIGHTS] Fetch Flights Name'
);

export const fetchFlightsNameSuccess = createAction (
  '[FLIGHTS] Fetch Flights Name Success',
  props<{ flights_name: string[] }>(),
)

export const fetchFlightsNameFailed = createAction (
  '[FLIGHTS] Fetch Flights Name Failed',
)
