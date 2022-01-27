import { Injectable } from '@angular/core';
import { User } from 'model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  users: User[] = [];
  currentUser: User | null = null;
  constructor(private router: Router) { }
  accName: string = ""

  registeUser(newuser: User) {
    this.users.push(newuser);
    console.log("Reg Success" + JSON.stringify(newuser))
    this.accName = newuser.emailId
  }
  registeEmail(): string {
    return this.accName
  }


  login(loginUser: User): any {
    //this.users.push(loginUser);
    console.log(loginUser)
    if (loginUser.emailId == "user1@gmail.com" && loginUser.password == "User@123") {
      this.router.navigateByUrl('/user1');
      this.currentUser = loginUser;
    }
    else if (loginUser.emailId == "user2@gmail.com" && loginUser.password == "User@321") {
      this.router.navigateByUrl('/user2');
      this.currentUser = loginUser;
    }
    else {
      //console.log(this.users.indexOf(loginUser))

      let found: User[] = this.users.filter(
        user => { return JSON.stringify(user.emailId).toLowerCase().includes(loginUser.emailId) });
      console.log("Found user" + JSON.stringify(found))
      let data = found[0].emailId
      if (found.length == 1 && found[0].password == loginUser.password) {
        this.router.navigateByUrl('/user3');
        this.currentUser = loginUser;
        return true;
      }
      else {

        return false;
      }
    }
  }
  users1: User = new User();
  setCustomer(newuser: User) {
    this.users1 = newuser;
  }
  getCustomer(): User {
    return this.users1;
  }

  logout() {
    this.currentUser = null;
  }
  getLoginUser(): User | null {
    return this.currentUser;
  }


}