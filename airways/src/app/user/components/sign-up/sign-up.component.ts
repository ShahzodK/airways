import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { AuthService } from 'app/user/services/auth.service';
import { dateValidator } from 'app/user/validators/date.validator';
import { passwordValidator } from 'app/user/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  countries = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+33', name: 'France' },
    { code: '+49', name: 'Germany' },
    { code: '+995', name: 'Georgia' },
    { code: '+48', name: 'Poland' },
    { code: '+375', name: 'Belarus' },
    { code: '+7', name: 'United Arab Emirates' },
  ];

  hidePassword = true;

  constructor(private authService: AuthService) {}

  createUserGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]),
    dateOfBirth: new FormControl('', [Validators.required, dateValidator]),
    gender: new FormControl('male'),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    citizenship: new FormControl('unknown'),
    assent: new FormControl(false, Validators.requiredTrue),
  });

  isPasswordStrong(): ValidationErrors | null {
    const control = this.createUserGroup.controls.password;
    return control.errors?.['strong'];
  }

  isDateValid(): ValidationErrors | null {
    const control = this.createUserGroup.controls.dateOfBirth;
    return control.errors?.['afterDate'];
  }

  submitUserForm() {
    console.log(this.createUserGroup.value);
    this.authService.isLoginPageVisible$.next(false);
  }
}
