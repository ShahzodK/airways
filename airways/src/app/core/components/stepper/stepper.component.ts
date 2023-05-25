import { Component } from '@angular/core';

import { ColorSchemeService } from 'app/core/services/color-scheme.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  constructor(public colorScheme: ColorSchemeService) {}
}
