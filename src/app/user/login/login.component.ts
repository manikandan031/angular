import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  loginError: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
    console.log('login');
    this.loginError = !this.authService.login(this.userName, this.password);
    console.log(this.loginError);
    if(!this.loginError){
      if(this.authService.redirectUrl){
        this.router.navigateByUrl(this.authService.redirectUrl);
      }else{
        this.router.navigate(['/products']);
      }
    }
    
  }

  cancel(){
    this.router.navigate(['/welcome']);
  }

}
