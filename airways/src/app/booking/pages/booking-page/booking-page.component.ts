import { Component, DoCheck } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements DoCheck {
  passengersForm: FormGroup;

  titleInfo =
    "Add the passenger's name as it is written on their documents (passport or ID).Do not use any accents or special characters. Do not use a nickname.";

  constructor(private fb: FormBuilder) {
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
      }),
    });
  }

  ngDoCheck(): void {
    this.array.forEach(() => this.addPassengers());
  }

  array = ['Adult', 'Child', 'Infant'];

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
      date: '',
      specialAssistance: false,
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

  visibilityPatternError(count: number, name: string) {
    return (
      this.passengers.controls[count].get(name)?.hasError('pattern') &&
      !this.passengers.controls[count].get(name)?.hasError('required')
    );
  }

  submit() {
    //console.log(this.visibilityInvalidIcon(0, 'firstName'));
    // console.log(this.passengers.controls[0].get('firstName'));
    //console.log(this.passengers.controls[0].get('gender')?.touched);
    // console.log(this.passengers.controls[0].touched);
    console.log(this.passengersForm.value);
  }

  add() {
    this.array.push('Adult');
  }
}
