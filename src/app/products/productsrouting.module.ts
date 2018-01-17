import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductdetailGuardService } from './product-detail/productdetail-guard.service';
import { ProductEditDeactivateGuardService } from './product-edit/product-edit.guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductdetailGuardService] },
      { path: 'productEdit/:id', component: ProductEditComponent, canDeactivate: [ProductEditDeactivateGuardService]}
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductsroutingModule { }
