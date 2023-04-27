import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName$ = new BehaviorSubject('Sign in');

  isLogged$ = new BehaviorSubject(false);

  isLoginPageVisible$ = new BehaviorSubject(false);

  userName: Observable<string>;

  isLogged: Observable<boolean>;

  isLoginPageVisible: Observable<boolean>;

  defaultDateFormat = 'MDY';

  defaultCurrency = 'EUR';

  constructor() {
    this.userName = this.userName$.asObservable();
    this.isLogged = this.isLogged$.asObservable();
    this.isLoginPageVisible = this.isLoginPageVisible$.asObservable();
  }

  checkLogIn() {
    const token = localStorage.getItem('userAirwaysToken');
    const name = localStorage.getItem('userAirwaysName');
    if (token && name) {
      this.isLogged$.next(true);
      this.userName$.next(name);
    }
  }

  isUserLoggedIn() {
    const token = localStorage.getItem('userAirwaysToken');
    const name = localStorage.getItem('userAirwaysName');
    return token && name ? true : false;
  }
}
