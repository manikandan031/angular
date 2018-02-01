import { Injectable } from '@angular/core';
import { IUser } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  currentUser: IUser;
  redirectUrl: string;
  constructor() { }

  isLoggedIn(): boolean{
    return !!this.currentUser;
  }

  login(userName: string, password: string): boolean{
    if(userName == 'admin' && password == 'admin'){
      this.currentUser = {
        userName: userName,
        password: password
      }
      return true;
    }
    return false;
  }

  logout(){
    this.currentUser = null;
  }

}
