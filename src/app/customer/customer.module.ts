import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerroutingModule } from './customerrouting.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomerroutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupComponent]
})
export class CustomerModule { }
