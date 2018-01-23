import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product-list/product.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: IProduct;
  currentProduct: IProduct;
  productForm: FormGroup;

  get tagsArray(){
    return <FormArray>this.productForm.get('tags');
  }

  get isDirty(): boolean{
    this.currentProduct = Object.assign({},this.product, this.productForm.value)
    return JSON.stringify(this.currentProduct) != JSON.stringify(this.product);
  }

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
                            starRating: '',
                            newTag: '',
                            tags: this.fb.array([])
                          });
  this.route.data.subscribe(data => {
    this.product = data['product'];
    console.log('DATA ' + this.product.tags);
    this.productForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      price: this.product.price,
      description: this.product.description,
      starRating: this.product.starRating,
    });
    this.product.tags.forEach(element => {
      this.tagsArray.push(new FormControl(element));
    });
  });
  }

  deleteProduct(): void {
    this.product = Object.assign({}, this.product, this.productForm.value);
    if(this.product.id > 0){
      this.productService.deleteProduct(this.product.id);
    }
    this.router.navigate(['/products']);
  }

  saveProduct(){
    if(this.productForm.dirty && this.productForm.valid){
      this.product = Object.assign({}, this.product, this.productForm.value);
      console.log('SAVE' + this.product);
      this.productService.saveProduct(this.product);
      this.router.navigate(['/products']);
    }
  }

  onBack(){
    this.router.navigate(['/products'],{queryParamsHandling: 'preserve'});
  }

  addTag(){
    let t = this.productForm.get('newTag').value ? 
                    this.productForm.get('newTag').value.split(',') : [];
    t.forEach(element => {
      this.tagsArray.push(new FormControl(element));
    });
    this.productForm.patchValue({
      newTag: ''
    });
  }

  removeTag(i: number){
    this.tagsArray.removeAt(i);
    this.productForm.markAsDirty();
  }

}
