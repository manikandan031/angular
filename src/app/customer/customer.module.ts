import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerroutingModule } from './customerrouting.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerroutingModule
  ],
  declarations: [SignupComponent]
})
export class CustomerModule { }
