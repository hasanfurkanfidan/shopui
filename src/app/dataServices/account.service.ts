import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  constructor() {}
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == 'Furkan' && user.password == '147fur369') {
      return true;
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
    }
    return false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem('isLogged')
    this.loggedIn = false;
  }
}
