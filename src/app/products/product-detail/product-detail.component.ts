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
    this._activatedRoute.data.subscribe(data => {
      this.product = data['product'];
    });
  }

  onBack(){
    this._router.navigate(['/products'],{ queryParamsHandling: 'preserve'});
  }

}
