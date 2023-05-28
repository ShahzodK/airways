import { createAction, props } from '@ngrx/store';

import { IOrder } from 'app/booking/models/flightDetails.model';

export const saveOrders = createAction(
  '[BOOKING] SAVE Orders',
  props<{ orders: IOrder[] }>()
);

export const initialUserOrders = createAction('[USER CART] Initial user cart');

export const saveUserOrders = createAction(
  '[USER CART] SAVE User Orders',
  props<{ userOrders: IOrder[] }>()
);
