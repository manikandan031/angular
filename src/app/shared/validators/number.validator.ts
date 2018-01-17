import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Custom Validator - A factory function that returns the validator function.
 * Factory function takes the needed params, validator fn can only take one param - AbstractControl
 * @param control
 */
export class NumberValidator {
    static range(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.value != undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'range': true };
            }
            return null;
        }
    }
}
