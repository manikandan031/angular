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
import { ProductResolver } from './product.resolver';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { delay } from 'q';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProductsroutingModule,
    InMemoryWebApiModule.forRoot(ProductData, {delay: 1000}),
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductdetailGuardService,
    ProductEditDeactivateGuardService,
    ProductResolver
  ]
})
export class ProductsModule { }
