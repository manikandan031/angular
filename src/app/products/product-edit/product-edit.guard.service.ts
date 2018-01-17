import { CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductEditComponent } from "./product-edit.component";

@Injectable()
export class ProductEditDeactivateGuardService implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component : ProductEditComponent): boolean{
        if(component.productForm.dirty || component.productForm.touched){
            return confirm('Do you want to navigate away and lose the changes?');
        }
        return true;
    }
}