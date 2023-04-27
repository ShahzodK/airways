import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;

  let isValidate = true;
  let message = "Your password isn't strong enough: ";

  const uppercaseLetters = /[A-Z]/;
  const lowercaseLetters = /[a-z]/;
  const number = /\d/;
  const specialCharacter = /[!@#?*%&]/;

  if (value.length < 8) {
    isValidate = false;
    message += `at least 8 characters\n`;
  }
  if (!uppercaseLetters.test(value) || !lowercaseLetters.test(value)) {
    isValidate = false;
    message += 'a mixture of both uppercase and lowercase letters; ';
  }
  if (!number.test(value)) {
    isValidate = false;
    message += 'a mixture of letters and numbers; ';
  }
  if (!specialCharacter.test(value)) {
    isValidate = false;
    message +=
      'inclusion of at least one special character, e.g., ! @ # ? * % &';
  }

  return !isValidate ? { strong: message } : null;
}
