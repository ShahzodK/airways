import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from 'app/user/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userName!: string;

  subscriptionOnUserName!: Subscription;

  startBooking = true;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.checkLogIn();

    this.subscriptionOnUserName = this.authService.userName.subscribe(
      (name) => (this.userName = name)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionOnUserName.unsubscribe();
  }

  openUserSettings() {
    if (!this.authService.isUserLoggedIn()) {
      if (this.authService.isLoginPageVisible$.getValue()) {
        this.authService.isLoginPageVisible$.next(false);
        this.authService.isChangeHeightMain = false;
      } else {
        this.authService.isLoginPageVisible$.next(true);
      }
      // console.log(this.authService.isLoginPageVisible$.getValue());
      // this.authService.isLoginPageVisible$.next(true);
    }
  }
}
