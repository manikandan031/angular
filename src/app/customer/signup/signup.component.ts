import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import {NumberValidator} from '../../shared/validators/number.validator';
import {emailMatchesValidator} from './validators/emailmatches.validator';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customerForm: FormGroup;
  emailMessage: string;
  get addresses(){
    return <FormArray>this.customerForm.get('addresses');
  }

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
      rating: ['', NumberValidator.range(1,5)],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()])
    });
    
    //Subscribing to valueChanges Watcher
    this.customerForm.get('notification').valueChanges.subscribe(value => {
      this.setNotification(value);
    });
    //Email Validation messages
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value => {
      this.setMessage(emailControl);
    });
    console.log(this.customerForm);
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

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  addAddress(): void{
    this.addresses.push(this.buildAddress());
  }

  deleteAddress(index: number){
    this.addresses.removeAt(index);
  }
}
