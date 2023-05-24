import { createAction, props } from '@ngrx/store';

import { IPassengersForm } from 'app/booking/models/passengersForm.model';

export const savePassengersForm = createAction(
  '[BOOKING] SAVE Passengers Form',
  props<{ passengersForm: IPassengersForm }>()
);
