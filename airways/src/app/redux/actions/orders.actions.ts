import { createAction, props } from '@ngrx/store';

import { IOrder } from 'app/booking/models/flightDetails.model';

export const saveOrders = createAction(
  '[BOOKING] SAVE Orders',
  props<{ orders: IOrder[] }>()
);
