import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  srcStepOne = '../../../../assets/step-one.svg';

  srcStepTwo = '../../../../assets/step-two.svg';

  srcStepThree = '../../../../assets/step-three.svg';
}
