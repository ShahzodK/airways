import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { PopUpAuthComponent } from 'app/shared/components/pop-up-auth/pop-up-auth.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private popUp: PopUpAuthComponent) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuth = Boolean(localStorage.getItem('userAirwaysToken'));
    if (!isAuth) {
      this.popUp.showPopUpAuth();
    }
    return isAuth;
  }
}
