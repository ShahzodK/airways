import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ColorSchemeService } from 'app/core/services/color-scheme.service';
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

  subscriptionOnChangeScheme!: Subscription;

  isColorScheme!: boolean;

  constructor(
    public authService: AuthService,
    public colorScheme: ColorSchemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.checkLogIn();

    this.subscriptionOnChangeScheme = this.colorScheme.isColorScheme.subscribe(
      (boolean) => (this.isColorScheme = boolean)
    );

    this.subscriptionOnUserName = this.authService.userName.subscribe(
      (name) => (this.userName = name)
    );
  }

  ngOnDestroy(): void {
    this.subscriptionOnUserName.unsubscribe();
    this.subscriptionOnChangeScheme.unsubscribe();
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

  redirectToSearch() {
    if (this.router.url !== '/search') {
      this.router.navigateByUrl('search');
      this.colorScheme.changeScheme();
    }
  }
}
