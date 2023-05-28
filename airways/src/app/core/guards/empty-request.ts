import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';

import { MainService } from 'app/search/services/main.service';
import { PopUpAuthComponent } from 'app/shared/components/pop-up-auth/pop-up-auth.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmptyRequestGuard {
  constructor(
    private router: Router,
    private popUp: PopUpAuthComponent,
    public store: Store,
    public mainService: MainService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.mainService.passengers.length > 0) {
      return true;
    } else {
      this.router.navigateByUrl('/search');
      return false;
    }
  }
}
