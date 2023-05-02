import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateValidator(
  control: AbstractControl
): ValidationErrors | null {
  const date = new Date(control.value);

  if (date > new Date()) {
    return { afterDate: 'The date is invalid' };
  }

  return null;
}
