import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ViewChild } from '@angular/core';
import { StarComponent } from '../../shared/star/star.component';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  showImage: boolean = false;
  _listFilter: string = "";
  products: IProduct[] = [];
  filteredProducts: IProduct[];
  @ViewChild(StarComponent) starComponent: StarComponent;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data => this.products = this.filteredProducts = data,
      err => console.log(err),
      () => console.log("done loading products")
    );    
  }

  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(value) : this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  onRatingClicked(message: string){
    this.pageTitle = "Product List: " + message;
    this.starComponent.testViewChild();
  }

}
