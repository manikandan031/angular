import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Custom Validator - A factory function that returns the validator function.
 * Factory function takes the needed params, validator fn can only take one param - AbstractControl
 * @param control
 */
function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value != undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
      return { 'range': true };
    }
    return null;
  }
}

/**
 * Cross Field Validation
 * @param c 
 */
function emailMatchesValidator(c: AbstractControl): {[key: string]: boolean} | null{
  let email = c.get('email');
  let confirmEmail = c.get('confirmEmail');
  if(email.pristine || confirmEmail.pristine || email.value == confirmEmail.value){
    return null
  }
  return {'match': true};
}

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customerForm: FormGroup;

  emailMessage: string;
  private validationMessages = {
    required: 'Please enter your email address',
    email: 'Please enter a valid email address'
  };
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]]
      },{validator: emailMatchesValidator}),
      phone: ['', Validators.pattern('[0-9]{10}')],
      notification: ['email'],
      rating: ['', rangeValidator(1,5)],
      sendCatalog: true
    });
    
    //Subscribing to valueChanges Watcher
    this.customerForm.get('notification').valueChanges.subscribe(value => {
      this.setNotification(value);
    });

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.subscribe(value => {
      this.setMessage(emailControl);
    });

  }

  /**
   * Change Validators dynamically based on user inputs
   * @param notifyType
   */
  setNotification(notifyType: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyType == 'text') {
      phoneControl.setValidators([Validators.required, Validators.pattern('[0-9]{10}')]);
    } else {
      phoneControl.setValidators([Validators.pattern('[0-9]{10}')]);
    }
    phoneControl.updateValueAndValidity();
  }

  setMessage(c: AbstractControl){
    this.emailMessage = '';
    if((c.dirty || c.touched) && c.errors){
      console.log(Object.keys(c.errors));
      //Joins all error messages as space separated
      this.emailMessage = Object.keys(c.errors)
                                .map(key => this.validationMessages[key]).join(' ');
    }
  }
}
