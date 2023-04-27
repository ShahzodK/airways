import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { AuthService } from 'app/user/services/auth.service';

import { passwordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  hidePassword = true;

  constructor(private authService: AuthService) {}

  authGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
  });

  isPasswordStrong(): ValidationErrors | null {
    const control = this.authGroup.controls.password;
    return control.errors?.['strong'];
  }

  submitAuthForm() {
    console.log(this.authGroup.value);
    this.authService.isLoginPageVisible$.next(false);
  }
}
