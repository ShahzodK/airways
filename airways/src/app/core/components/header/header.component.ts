import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoginPageVisible = false;

  userName = 'Sign in';

  defaultDateFormat = 'MDY';

  defaultCurrency = 'EUR';

  startBooking = true;

  openUserSettings() {
    if (!localStorage.getItem('userAirwaysToken')) {
      this.isLoginPageVisible = true;
    }
  }
}
