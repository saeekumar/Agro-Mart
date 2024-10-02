import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  
   Product: any[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/400x200?text=Product+1',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/400x200?text=Product+2',
      rating: 3.8,
    },
  ]
  constructor() { }
  
}


