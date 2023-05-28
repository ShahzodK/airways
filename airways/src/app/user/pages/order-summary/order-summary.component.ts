import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ICostTrip, IOrder } from 'app/booking/models/flightDetails.model';
import { FormatParamService } from 'app/core/services/format-param.service';
import { initialUserOrders } from 'app/redux/actions/orders.actions';
import { userOrders } from 'app/redux/selectors/flights.selectors';
import { AuthService } from 'app/user/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  orders$!: Observable<IOrder[]>;

  constructor(
    private store: Store,
    public auth: AuthService,
    public format: FormatParamService
  ) {}

  ngOnInit(): void {
    this.orders$ = this.store.select(userOrders);
    this.store.dispatch(initialUserOrders());
  }

  getTotalCost(arr: ICostTrip[]) {
    return arr.reduce((ac, el) => ac + el.total, 0);
  }
}
