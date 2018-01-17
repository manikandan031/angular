import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './product-list/product.service';
import { ProductdetailGuardService } from './product-detail/productdetail-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsroutingModule } from './productsrouting.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { ProductData} from './product.data';
import { ProductEditDeactivateGuardService } from './product-edit/product-edit.guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProductsroutingModule,
    InMemoryWebApiModule.forRoot(ProductData),
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  providers: [
    ProductService,
    ProductdetailGuardService,
    ProductEditDeactivateGuardService
  ]
})
export class ProductsModule { }
