import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'messages', component: MessageComponent, outlet: 'popup'}
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
