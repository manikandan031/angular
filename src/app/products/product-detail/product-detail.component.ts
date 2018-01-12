import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { IProduct} from '../product-list/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 196.95,
      "starRating": 3.2,
      "imageUrl": "/assets/images/handtool.png"
    };
  }

  onBack(){
    this._router.navigate(['/products']);
  }

}
