import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from './service/loginuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(private router:Router , private loginService: LoginuserService){

  }
  login() {
    this.router.navigateByUrl("/loginuser");
    this.isLoggedIn = true;
  }
  logout() {
    console.log("Logout")
    this.loginService.logout();
    this.router.navigateByUrl("/loginuser");
  }
  checkLoginStatus(): boolean {

    if (this.loginService.getLoginUser() == null)
      return false;
    else
      return true;
  }
}
