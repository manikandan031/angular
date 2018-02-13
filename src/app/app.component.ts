import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Acme Product Management';
  loading: boolean = true;
  displayMessages: boolean = false;

  constructor(private authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent) => {
      this.checkRoutingEvents(routerEvent);
    });
  }

  showMessages(): void {
    this.router.navigate([{outlets: {popup:'messages'}}]);
    this.displayMessages = true;
  }

  hideMessages(): void {
    this.router.navigate([{outlets: {popup:null}}]);
    this.displayMessages = false;
  }

  checkRoutingEvents(routerEvent: Event){
    if(routerEvent instanceof NavigationStart){
      this.loading = true;
    }else if(routerEvent instanceof NavigationEnd || 
              routerEvent instanceof NavigationError || 
              routerEvent instanceof NavigationCancel){
      this.loading = false;
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
