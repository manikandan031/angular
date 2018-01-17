import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product-list/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: IProduct;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productForm = this.fb.group({
                            productName: '',
                            productCode: '',
                            description: '',
                            price: '',
                            starRating: ''
                          });

    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.getProduct(id);
    });

  }

  getProduct(id: number): void {
    if (id == 0) {
      return;
    }
    this.productService.getProduct(id).subscribe((product: IProduct) => {
      this.product = product;
      this.productForm.patchValue({
        productName: this.product.productName,
        productCode: this.product.productCode,
        price: this.product.price,
        description: this.product.description,
        starRating: this.product.starRating
      });
    });
  }

  deleteProduct(): void {
    if(this.product.id > 0){
      this.productService.deleteProduct(this.product.id);
    }
    this.router.navigate(['/products']);
  }

  saveProduct(){
    if(this.productForm.dirty && this.productForm.valid){
      console.log('Before Copy ' + this.product);
      let p = Object.assign({}, this.product, this.productForm.value);
      console.log('p ' + p);
      this.productService.saveProduct(p);
      this.router.navigate(['/products']);
    }
  }

  onBack(){
    this.router.navigate(['/products']);
  }

}
