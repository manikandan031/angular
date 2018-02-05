import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductdetailGuardService } from './product-detail/productdetail-guard.service';
import { ProductEditDeactivateGuardService } from './product-edit/product-edit.guard.service';
import { ProductResolver } from './product.resolver';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { AuthGuard } from '../user/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            canActivate: [ProductdetailGuardService],
            resolve: { product: ProductResolver }
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            canDeactivate: [ProductEditDeactivateGuardService],
            resolve: { product: ProductResolver },
            children: [
              { path: '', redirectTo: 'info', pathMatch: 'full' },
              { path: 'info', component: ProductEditInfoComponent },
              { path: 'tags', component: ProductEditTagsComponent }
            ]
          }
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductsroutingModule { }
