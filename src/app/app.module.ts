import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsModule } from './products/products.module';
import { ApproutingModule } from './approuting.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CustomerModule,
    UserModule,
    ApproutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
