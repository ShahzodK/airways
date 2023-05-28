import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { IUser } from 'app/user/model/user.interface';
import { catchError, map, of, switchMap } from 'rxjs';

import { initialUserOrders, saveUserOrders } from '../actions/orders.actions';

@Injectable()
export class UserOrdersEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadUserOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initialUserOrders),
      switchMap(() => {
        const token = localStorage.getItem('userAirwaysToken') ?? '';
        const id = localStorage.getItem('userAirwaysId');
        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${token}`);
        return this.http
          .get<IUser>(`http://localhost:3000/users/${id}`, { headers })
          .pipe(
            map((user: IUser) =>
              saveUserOrders({ userOrders: user.orders ?? [] })
            ),
            catchError(() => of(saveUserOrders({ userOrders: [] })))
          );
      })
    );
  });
}
// catchError(() => saveUserOrders({ userOrders: [] })))
