import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductdetailGuardService } from './product-detail/productdetail-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductdetailGuardService] }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductsroutingModule { }
