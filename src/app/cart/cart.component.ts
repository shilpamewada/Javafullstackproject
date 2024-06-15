import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  emailId: any;
  localData: any;
  cart: any;
  total: number;

  constructor(private service: EmpService) {
    this.total = 0;
    this.emailId = localStorage.getItem('emailId');

    //Cart Using Service
    this.cart = this.service.cartItems;
   
    if (this.cart != null) {
      this.cart.forEach((element: any) => {
        this.total += element.price;
      });
    }
  }


  purchase() {
    this.cart=null;
    this.localData = null;
    this.total = 0;
    this.service.purchase();
  }
}
