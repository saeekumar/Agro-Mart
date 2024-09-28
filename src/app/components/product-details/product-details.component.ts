import { Component } from '@angular/core';
 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: any =
    {
      id: 1,
      name: 'SAHOO TOMATO SEEDS [TO-3251]',
      description: 'Description for Product 1',
      price: 29.99,
      imageUrl:'https://cdn.shopify.com/s/files/1/0722/2059/products/Sahoo.jpg?v=1671198625&width=300',
      rating: 4.5,
    }
   
 
 
}
