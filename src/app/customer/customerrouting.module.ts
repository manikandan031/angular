import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'signup', component: SignupComponent
      }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class CustomerroutingModule { }
