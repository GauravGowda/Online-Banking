import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginuserService } from '../service/loginuser.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private loginService: LoginuserService) { }
  canActivate(): boolean {
    if (this.loginService.getLoginUser() == null) return false;
    else return true;

  }
}

