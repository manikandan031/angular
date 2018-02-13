// export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

import { Component, Directive, Injectable, Input } from '@angular/core';
import { NavigationExtras, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Directive({
    selector: '[routerLink]',
    host: {
        '(click)': 'onClick()'
    }
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

@Directive({
    selector: '[routerLinkActive]',
    host: {
        '(click)': 'onClick()'
    }
})
export class RouterLinkActiveStubDirective {
    @Input('routerLinkActive') routerLinkActive: any;
    isActive: any = null;

    onClick() {
        this.isActive = this.routerLinkActive;
    }
}

@Directive({
    selector: '[queryParams]',
    host: {
        '(click)': 'onClick()'
    }
})
export class QueryParamsStubDirective {
    @Input('queryParams') linkParams: any;
    queryParams: any = null;

    onClick() {
        this.queryParams = this.linkParams;
    }
}

@Component({ selector: 'router-outlet', template: '' })
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
    private _events: any;
    navigate(commands: any[], extras?: NavigationExtras) { }
    
    public get events(): any{
        this._events = Observable.of(new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login'));
        return this._events;
    }
    
    public set events(event: any){
        this._events = event;
    }
}


