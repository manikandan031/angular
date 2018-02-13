import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IUser } from './user/user';
import { AuthService } from './user/auth.service';
import { Router, NavigationEnd, NavigationStart} from '@angular/router';
import { RouterLinkStubDirective, RouterOutletStubComponent, RouterLinkActiveStubDirective, RouterStub } from './testing/router-stubs';
import { Observable } from 'rxjs/Observable';

class AuthServiceStub {
  currentUser: IUser = {
    userName: 'admin',
    password: 'admin'
  };
  redirectUrl: string = '/welcome'; 
  login(userName: string, password: string){
    return true;
  }
  isLoggedIn(){
    return true;
  }
  logout(){

  }
}

describe('AppComponent', () => {

  /* Declare Component, Fixture, DebugElement, HTMLElement*/
  let sut: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let authService: AuthService;
  let router: Router;

  /*use async for external template based components */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, // Declare the test component
        RouterLinkStubDirective, //routerLink Stub - see router-stub.ts
        RouterLinkActiveStubDirective, //routerLinkactive Stub - see router-stub.ts
        RouterOutletStubComponent], //router-outlet stub - see router-stub.ts 
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub},
        { provide: Router, useClass: RouterStub} // Router Stub - see router-stub.ts
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent); //Create Fixture
      sut = fixture.componentInstance; //AppComponent Instance
      authService = fixture.debugElement.injector.get(AuthService);
      router = fixture.debugElement.injector.get(Router);
      fixture.detectChanges();
    });
  }));

  it('hello world test',() => {
    expect(true).toBeTruthy('Woooow!!');
  });

  it('should display title in template', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('a')); //use queryall to get all <a> elements as array
    el = de.nativeElement;
    expect(el.textContent).toEqual(sut.title);
  });

  it('should display messages on showmessages', () => {
    fixture.detectChanges();
    sut.showMessages();
    expect(sut.displayMessages).toEqual(true);
  });

  it('should hide messages on hideMessages', () => {
    fixture.detectChanges();
    sut.hideMessages();
    expect(sut.displayMessages).toEqual(false);
  });

  it('loading should be false on NavigationEnd', () => {
    fixture.detectChanges();
    sut.checkRoutingEvents(new NavigationEnd(0,'http://localhost:4200/login', 'http://localhost:4200/login'));
    expect(sut.loading).toEqual(false);
  });

  it('loading should be true on NavigationStart', () => {
    fixture.detectChanges();
    sut.checkRoutingEvents(new NavigationStart(0,'http://localhost:4200/login'));
    expect(sut.loading).toEqual(true);
  });

  it('should navigate to welcome on logout', () => {
    fixture.detectChanges();
    const spy = spyOn(router, 'navigate'); // Spy on router navigate method
    sut.logout();
    expect(spy.calls.first().args[0]).toEqual(['/welcome']);    
  });

});
