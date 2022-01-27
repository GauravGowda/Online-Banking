import { Component, OnInit } from '@angular/core';
import { Car } from 'model/Cars';
import { LoginuserService } from '../service/loginuser.service';
import { ShareidService } from '../service/shareid.service';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {
  query: string = "";
  accountNumber = this.shareid.accountNumber3
  query1: string = ""
  balance: number = 0
  balanceuser = 0
  amtdeduct = 0
  isUpdate: boolean = false;
  Cars: Car[] = [];
  editCar: Car = new Car();
  car1: Car = new Car();
  car: Car = new Car();
  isDisplay: boolean = false;
  showBalance: boolean = false;
  isCredit: boolean = false
  dateObj = new Date();
  accountName: string = this.loginService.registeEmail()
  constructor(private moneytransfer: TransferService, private shareid: ShareidService, private loginService: LoginuserService) {
  }
  backTransaction() {
    this.showBalance = false
  }
  displayBalance() {
    this.showBalance = true
  }
  creditDisplay() {
    this.isCredit = true
  }
  cancreditDisplay() {
    this.isCredit = false
  }
  debitDisplay() {
    this.isDisplay = true
  }
  candebitDisplay() {
    this.isDisplay = false
  }
  addCar() {
    if (this.shareid.accountNumber3 == this.car.id) {
      this.Cars.push(this.car)
      this.balance = this.balance + parseInt(this.car.color)
      this.car = new Car()
      console.log(this.Cars)
    }
    else {
      alert("Invalid Account Number!")
    }
  }
  updateCar(car: Car) {
    this.isUpdate = true;
    this.editCar = car
    console.log("Update Car" + JSON.stringify(car))

  }
  done() {
    this.Cars.push(this.car1)
    if (this.shareid.accountNumber1 == this.car1.id || this.shareid.accountNumber2 == this.car.id) {
      this.moneytransfer.setfundTransfer(this.car1)
      this.balance = this.balance - parseInt(this.car1.color)
      this.car1 = new Car()
      console.log(this.Cars)
    }
    else {
      alert("No such user exists!")
    }
  }
  disbalance() {
    this.Cars.push(this.moneytransfer.getfundTransfer())
    this.balance = this.balance + parseInt(this.moneytransfer.getfundTransfer().color)
  }
  updateDone() {
    this.isUpdate = false;
  }





  amt() {
    this.balance = this.balance - this.amtdeduct
  }


  ngOnInit(): void {
  }
  //  mail: String = this.loginService.getCustomer().name
  //dis = this.loginService.getData()

}