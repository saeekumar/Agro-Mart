import { Component } from '@angular/core';
import { AddtocartService } from 'src/app/_services/addtocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products:any[]=[]
  totalAmount:number=0


  constructor(private cartServ:AddtocartService) { }

  ngOnInit(): void {
    this.cartServ.getProductData().subscribe(res=>{
      // console.log(res, "resss data");
      this.products=res;
      this.totalAmount=this.cartServ.getTotalAmount()
      // console.log(res,this.totalAmount,"ress data");
      
    })
  }

  removeItem(item:any){
    this.cartServ.removeCartData(item);

  }
  


}
