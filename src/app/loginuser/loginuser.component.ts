import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../service/loginuser.service';
import { User } from 'model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  user: User = new User();
  data = this.logService.getCustomer().emailId

  constructor(private logService: LoginuserService, private router: Router) {
  }

  ngOnInit(): void {
    //alert(this.logService.getData())
  }
  login() {

    if (this.logService.login(this.user)) {
      this.router.navigateByUrl('/user3');
      console.log("Login Success")
    }


  }
}
