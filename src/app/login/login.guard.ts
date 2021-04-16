import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../dataServices/account.service';

@Injectable()
class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.accountService.isLoggedIn();
    if (logged) {
      return true;
    }
    this.router.navigate(["login"])
    return false;
  }
}
