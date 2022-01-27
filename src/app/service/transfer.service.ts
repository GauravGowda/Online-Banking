import { Injectable } from '@angular/core';
import { Car } from 'model/Cars';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  car: Car = new Car
  accNo = 0
  constructor() { }
  setfundTransfer(money: Car) {
    this.car = money
  }
  getfundTransfer(): Car {
    return this.car;
  }

}
