import { Service } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Service()
export class ValidatorService {
    customNameValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) return null;
            const pattern = /^[\p{L}.'-]+(?: [\p{L}.'-]+)*$/u;
            return pattern.test(value) ? null : { namePattern: true };
        };
    }

    customFullNameValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) return null;
            return value.trim().split(/\s+/).length >= 2 ? null : { fullName: true };
        };
    }

    customMailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }
            const pattern = /^[^\s@]{2,}@[^\s@]{1,}\.[^\s@]{2,}$/;
            return pattern.test(value) ? null : { emailPattern: true };
        };
    }
}
