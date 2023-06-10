import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { AuthService } from 'app/user/services/auth.service';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.scss'],
})
export class AuthPagesComponent {
  constructor(public authService: AuthService) {}

  check(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'Sign up') {
      this.authService.isChangeHeightMain = true;
    } else {
      this.authService.isChangeHeightMain = false;
    }
  }
}
