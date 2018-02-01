import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product-list/product.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  private currentProduct: IProduct;
  private originalProduct: IProduct;

  get product(){
    return this.currentProduct;
  }

  set product(product: IProduct){
    this.currentProduct = product;
    this.originalProduct = Object.assign({}, product);
  }

  isDirty(): boolean{
    return JSON.stringify(this.currentProduct) !== JSON.stringify(this.originalProduct);
  }

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe(data => {
      this.product = data['product'];
    });
  }

  deleteProduct(): void {
    if (this.product.id > 0) {
      this.productService.deleteProduct(this.product.id);
    }
    this.router.navigate(['/products']);
  }

  saveProduct() {
    this.productService.saveProduct(this.product);
    this.router.navigate(['/products']);
  }

  onBack() {
    this.router.navigate(['/products'], { queryParamsHandling: 'preserve' });
  }
}
