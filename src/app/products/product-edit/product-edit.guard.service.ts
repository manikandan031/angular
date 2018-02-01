import { CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductEditComponent } from "./product-edit.component";

@Injectable()
export class ProductEditDeactivateGuardService implements CanDeactivate<ProductEditComponent> {

    canDeactivate(component : ProductEditComponent): boolean{
        if(component.isDirty()){
            return confirm('Navigate away and lose all changes?');
        }
        return true;
    }
}