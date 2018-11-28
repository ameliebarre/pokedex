import { FormGroup } from '@angular/forms';

export function MustMatch(controlPassword: string, matchingControlPassword) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlPassword];
    const matchingControl = formGroup.controls[matchingControlPassword];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
