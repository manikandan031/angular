import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService{

    private _productUrl = "api/products";
    constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]>{
       return this._http.get<IProduct[]>(this._productUrl);
    }

    getProduct(id: number) : Observable<IProduct>{
        return this._http.get<IProduct>(this._productUrl+'/'+id);
    }

    deleteProduct(id: number){
        this._http.delete(this._productUrl+'/'+id).subscribe(data => {
            console.log(data);
        });
    }

    saveProduct(product: IProduct){
        if(product.id == 0){
            product.id = undefined;
            this._http.post(this._productUrl, product).subscribe(data => {
                console.log("Created Product" + data);
            });
        }else{
            console.log("Updating Product" + product.id + " " + product.productName);
            this._http.post(this._productUrl + '/' + product.id, product).subscribe(data => {
                console.log("Updated Product" + data);
            });
            
        }
    }

}