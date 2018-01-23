import { Injectable } from '@angular/core';
import { IUser } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  currentUser: IUser;
  redirectUrl: string;
  constructor() { }

  login(userName: string, password: string): boolean{
    console.log(this.redirectUrl);
    this.currentUser = {
      userName: userName,
      password: password
    }
    if(userName == 'admin' && password == 'admin'){
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean{
    if(this.currentUser){
      return true;
    }
    return false;
  }
}
