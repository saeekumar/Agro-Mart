import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

    cartDataList: any = [];
    productList = new BehaviorSubject<any>([]);
  
    constructor() {}
  
    //get method
    getProductData() {
      return this.productList.asObservable();
    }
  
    
    //set method----adding item to cart
    addToCart(product: any) {
      this.cartDataList.push(product);
      this.productList.next(this.cartDataList);
      this.getTotalAmount();
      console.log(this.cartDataList, 'add cart data');
    }
  
    //calculate total amount
    getTotalAmount() {
      let grandTotal = 0;
      this.cartDataList.map((a: any) => {
        grandTotal += a.total;
      });
      return grandTotal
    }
  
    //removing single item
    removeCartData(products: any) {
      this.cartDataList.map((a: any, index: any) => {
        if (products.id === a.id) {
          this.cartDataList.splice(index, 1);
        }
      });
      this.productList.next(this.cartDataList)
    }

}
