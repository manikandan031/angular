import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product-list/product.service';
import { ProductdetailGuardService } from './product-detail/productdetail-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsroutingModule } from './productsrouting.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProductsroutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductdetailGuardService
  ]
})
export class ProductsModule { }
