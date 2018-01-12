import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class ProductdetailGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot){
    
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert('Enter Valid Product Id');
      return false;
    }
    return true;
  }

}
