import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
  static matchPassword(fg: FormGroup) {

    const password = fg.controls['password'].value;
    const confirmPassword = fg.controls['confirmPassword'].value;

    if (confirmPassword && confirmPassword !== password) {
      fg.get('confirmPassword').setErrors({ mismatch: true });
      console.log('false');
    }
  }
}
