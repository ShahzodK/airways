import { Component } from '@angular/core';

import { ColorSchemeService } from './core/services/color-scheme.service';
import { AuthService } from './user/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    public colorScheme: ColorSchemeService
  ) {}
}
