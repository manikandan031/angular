import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms/src/model";
import { IProduct } from "../product-list/product";
import { ActivatedRoute } from "@angular/router";
import { Validators } from "@angular/forms";

@Component({
    templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit{
    
    productInfoForm: FormGroup;
    product: IProduct;

    constructor(private fb: FormBuilder, private route: ActivatedRoute){}

    ngOnInit(): void {

        this.route.parent.data.subscribe(data => {
            this.product = data['product'];
        });
        this.productInfoForm = this.fb.group({
            productName: [this.product.productName,[Validators.required]],
            productCode: [this.product.productCode,[Validators.required]],
            description: [this.product.description, [Validators.required]]
        });
    }


}