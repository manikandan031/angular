import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { IProduct} from '../product-list/product';
import { ProductService } from '../product-list/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id).subscribe((product: IProduct) => {
      console.log(product);
      this.product = product;
    });
  }

  onBack(){
    this._router.navigate(['/products']);
  }

}
