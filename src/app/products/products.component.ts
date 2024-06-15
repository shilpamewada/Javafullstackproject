// import { JsonPipe } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })
// export class ProductsComponent {

//   products: any;
//   emailId: any;

//   //cart
//   cart: any;
//   cartItems: any;
//   localData: any;

//   constructor() {
//     //cart
//     this.cartItems = [];

//     this.emailId = localStorage.getItem('emailId');

//     // this.products = [
//     //   {id:1001, name:"Nokia",   price:14999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10001.jpg"},
//     //   {id:1002, name:"Samsung", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10002.jpg"},
//     //   {id:1003, name:"IPhone",  price:34999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10003.jpg"},
//     //   {id:1004, name:"RealMe",  price:44999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10004.jpg"},
//     //   {id:1005, name:"Oppo",    price:54999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10005.jpg"},
//     //   {id:1006, name:"Vivo",    price:64999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10006.jpg"}
//     // ];
//   }

//    //cart
//    addToCart(product: any) {
//     this.service.addToCart(product);
//   }

//   //cart
//   // addToCart(product: any) {

//   //   this.localData = localStorage.getItem('cartItems');

//   //   if (this.localData != null) {
//   //     this.cart = JSON.parse(this.localData);
     
//   //     this.cart.forEach((element: any) => {
//   //       this.cartItems.push(element);
//   //     });
//   //   }

//   //   this.cartItems.push(product);    
//   //   console.log(this.cartItems);

//   //   localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
//   // }
// }


import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any;
  emailId: any;

  // cart
  cartItems: any[] = [];
  localData: any;

  constructor(private service: EmpService) {
    this.emailId = localStorage.getItem('emailId');

    // Uncomment if you need this static data for testing
    this.products = [
      {id:1001, name:"Nokia", price:14999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10001.jpg"},
      {id:1002, name:"Samsung", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10002.jpg"},
      {id:1003, name:"IPhone", price:34999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10003.jpg"},
      {id:1004, name:"RealMe", price:44999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10004.jpg"},
      {id:1005, name:"Oppo", price:54999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10005.jpg"},
      {id:1006, name:"Vivo", price:64999.00, description:"No Cost EMI Applicable", imgsrc:"Images/10006.jpg"}
    ];
  }

  addToCart(product: any) {
    this.service.addToCart(product);
  }
}
