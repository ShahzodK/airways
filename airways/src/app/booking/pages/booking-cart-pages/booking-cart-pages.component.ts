import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IOrder } from 'app/booking/models/flightDetails.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { FormatParamService } from 'app/core/services/format-param.service';
import { saveOrders } from 'app/redux/actions/orders.actions';
import { ordersStorage } from 'app/redux/selectors/flights.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-cart-pages',
  templateUrl: './booking-cart-pages.component.html',
  styleUrls: ['./booking-cart-pages.component.scss'],
})
export class BookingCartPagesComponent implements OnInit {
  orders$!: Observable<IOrder[]>;

  countSelected = 0;

  orderSelected: number[] = [];

  constructor(
    private colorScheme: ColorSchemeService,
    private store: Store,
    public format: FormatParamService
  ) {
    this.colorScheme.changeSchemeFalse();
  }

  ngOnInit(): void {
    this.orders$ = this.store.select(ordersStorage);
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

  payOrder() {
    const ordersLocal = localStorage.getItem('airwaysOrders');
    if (ordersLocal) {
      const orders: IOrder[] = JSON.parse(ordersLocal);
      const newOrders = orders.filter(
        (_, index) => !this.orderSelected.includes(index)
      );
      this.store.dispatch(saveOrders({ orders: newOrders }));
      localStorage.setItem('airwaysOrders', JSON.stringify(newOrders));
      this.orderSelected = [];
      this.countSelected = 0;
    }
  }
}
