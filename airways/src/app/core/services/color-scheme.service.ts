import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  isColorScheme$ = new BehaviorSubject(true);

  isColorScheme: Observable<boolean>;

  isInvisibilityStepper$ = new BehaviorSubject(true);

  isInvisibilityStepper: Observable<boolean>;

  steps = {
    stepFirst: '../../../../assets/step-edit.svg',
    stepSecond: '../../../../assets/step-two.svg',
    stepThird: '../../../../assets/step-three.svg',
  };

  constructor() {
    this.isColorScheme = this.isColorScheme$.asObservable();
    this.isInvisibilityStepper = this.isInvisibilityStepper$.asObservable();
  }

  changeScheme() {
    if (this.isColorScheme$.getValue()) {
      this.isColorScheme$.next(false);
    } else {
      this.isColorScheme$.next(true);
    }
  }

  changeSchemeFalse() {
    this.isColorScheme$.next(false);
  }

  changeSchemeTrue() {
    this.isColorScheme$.next(true);
  }

  forPageSummary() {
    this.changeSchemeFalse();
    this.isInvisibilityStepper$.next(false);
    this.steps.stepFirst = '../../../../assets/step-done.svg';
    this.steps.stepSecond = '../../../../assets/step-done.svg';
    this.steps.stepThird = '../../../../assets/step-edit.svg';
  }

  forPageBooking() {
    this.changeSchemeFalse();
    this.isInvisibilityStepper$.next(false);
    this.steps.stepFirst = '../../../../assets/step-done.svg';
    this.steps.stepSecond = '../../../../assets/step-edit.svg';
    this.steps.stepThird = '../../../../assets/step-three.svg';
  }

  forPageTickets() {
    this.changeSchemeFalse();
    this.isInvisibilityStepper$.next(false);
    this.steps.stepFirst = '../../../../assets/step-edit.svg';
    this.steps.stepSecond = '../../../../assets/step-two.svg';
    this.steps.stepThird = '../../../../assets/step-three.svg';
  }

  forPageMain() {
    this.changeSchemeTrue();
    this.isInvisibilityStepper$.next(true);
  }

  forCart() {
    this.changeSchemeFalse();
    this.isInvisibilityStepper$.next(true);
  }
}
