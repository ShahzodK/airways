import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IOrder } from 'app/booking/models/flightDetails.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { FormatParamService } from 'app/core/services/format-param.service';
import { initialUserOrders } from 'app/redux/actions/orders.actions';
import { userOrders } from 'app/redux/selectors/flights.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-cart-pages',
  templateUrl: './user-cart-pages.component.html',
  styleUrls: ['./user-cart-pages.component.scss'],
})
export class UserCartPagesComponent implements OnInit {
  orders$!: Observable<IOrder[]>;

  countSelected = 0;

  orderSelected: number[] = [];

  constructor(
    private store: Store,
    public format: FormatParamService,
    private colorScheme: ColorSchemeService
  ) {
    this.colorScheme.forCart();
  }

  ngOnInit(): void {
    this.store.dispatch(initialUserOrders());
    this.orders$ = this.store.select(userOrders);
  }

  getTotalCost(array: IOrder[]) {
    return array.reduce((ac, order) => ac + order.price, 0);
  }

  selectOrder(event: { checked: boolean; index: number }) {
    if (event.checked) {
      this.countSelected++;
      this.orderSelected.push(event.index);
    } else {
      this.countSelected--;
      this.orderSelected = this.orderSelected.filter(
        (_, i) => i !== event.index
      );
    }
  }
}
