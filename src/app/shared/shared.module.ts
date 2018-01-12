import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/src/module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    ConvertToSpacesPipe,
    StarComponent,
    FormsModule
  ]
})
export class SharedModule { }
