import { Component, OnInit } from '@angular/core';
import { User } from 'model/user';
import { LoginuserService } from '../service/loginuser.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  user:User=new User();

  constructor(private logService:LoginuserService) { }


  ngOnInit(): void {
  }
  login(){
    this.logService.registeUser(this.user)
    this.logService.setCustomer(this.user)
  }
  
}
