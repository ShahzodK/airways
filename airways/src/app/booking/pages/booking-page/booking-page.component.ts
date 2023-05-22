import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { IPassengersForm } from 'app/booking/models/passengersForm.model';
import { ColorSchemeService } from 'app/core/services/color-scheme.service';
import { savePassengersForm } from 'app/redux/actions/passengers.actions';
import { dateValidator } from 'app/user/validators/date.validator';
import { Subscription } from 'rxjs';

import { selectSearchForm } from '../../../redux/selectors/flights.selectors';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnInit, OnDestroy {
  passengersForm: FormGroup;

  passengers$!: Subscription;

  passengersArray: string[] = [];

  titleInfo =
    "Add the passenger's name as it is written on their documents (passport or ID).Do not use any accents or special characters. Do not use a nickname.";

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private colorScheme: ColorSchemeService
  ) {
    this.colorScheme.changeScheme();

    this.passengersForm = this.fb.group({
      passengers: this.fb.array([]),
      contacts: this.fb.group({
        country: ['', [Validators.required]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        cardNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('[0-9]*'),
            Validators.minLength(16),
            Validators.maxLength(16),
          ],
        ],
      }),
    });
  }

  ngOnInit(): void {
    this.passengers$ = this.store
      .select(selectSearchForm)
      .subscribe((data) => this.parsePassengers(data.passengers));
  }

  ngOnDestroy(): void {
    this.passengers$.unsubscribe();
  }

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

  get passengers() {
    return this.passengersForm.get('passengers') as FormArray;
  }

  addPassengers() {
    const passenger = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      gender: ['', [Validators.required]],
      date: ['', [Validators.required, dateValidator]],
      specialAssistance: false,
      baggage: false,
    });
    this.passengers.push(passenger);
  }

  visibilityInvalidIcon(count: number, name: string) {
    const control = this.passengers.controls[count].get(name);
    if (!control?.valid && control?.touched) {
      return true;
    } else {
      return false;
    }
  }

  contactsRequiredError(name: string) {
    return this.passengersForm.get('contacts')?.get(name)?.hasError('required');
  }

  contactsEmailError(name: string) {
    return (
      this.passengersForm.get('contacts')?.get(name)?.hasError('email') &&
      !this.passengersForm.get('contacts')?.get(name)?.hasError('required')
    );
  }

  visibilityRequiredError(count: number, name: string) {
    return this.passengers.controls[count].get(name)?.hasError('required');
  }

  visibilityDateError(count: number) {
    return this.passengers.controls[count].get('date')?.hasError('afterDate');
  }

  visibilityPatternError(count: number, name: string) {
    return (
      this.passengers.controls[count].get(name)?.hasError('pattern') &&
      !this.passengers.controls[count].get(name)?.hasError('required')
    );
  }

  submit() {
    // if (this.passengersForm.valid) {
    const formValue: IPassengersForm = this.passengersForm.getRawValue();
    console.log(formValue);
    this.store.dispatch(savePassengersForm({ passengersForm: formValue }));
    this.router.navigateByUrl('booking/summary');
    // }
  }

  isDateValid(count: number): ValidationErrors | null {
    const error = this.passengers.controls[count].get('date')?.errors;
    if (error) {
      return error['afterDate'];
    }
    return null;
  }

  parsePassengers(arr: string[]) {
    const passengers: string[] = [];
    arr.forEach((passenger) => {
      const [count, type] = passenger.split(' ');
      if (+count > 0) {
        const elem = Array(+count).fill(type);
        passengers.push(...elem);
      }
    });
    passengers.forEach((elem) => {
      this.addPassengers();
      this.passengersArray.push(elem);
    });
  }
}
