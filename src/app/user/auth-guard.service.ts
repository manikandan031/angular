import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{
    
    canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);   
    }

    constructor(private authService: AuthService, private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn(state.url);    
    }

    checkLoggedIn(url: string): boolean{
        if(this.authService.isLoggedIn()){
           return true; 
        }else{
            this.authService.redirectUrl = url;
            this.router.navigate(['/login']);
            return false;
        }
    }


}