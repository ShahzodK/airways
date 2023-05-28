import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { initialUserOrders } from 'app/redux/actions/orders.actions';

@Component({
  selector: 'app-user-cart-pages',
  templateUrl: './user-cart-pages.component.html',
  styleUrls: ['./user-cart-pages.component.scss'],
})
export class UserCartPagesComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initialUserOrders());
  }
}
