import {AbstractControl} from '@angular/forms';

/**
 * Cross Field Validation
 * @param c 
 */
export function emailMatchesValidator(c: AbstractControl): {[key: string]: boolean} | null{
    let email = c.get('email');
    let confirmEmail = c.get('confirmEmail');
    if(email.pristine || confirmEmail.pristine || email.value == confirmEmail.value){
      return null
    }
    return {'match': true};
  }