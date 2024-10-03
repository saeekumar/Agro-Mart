import { Component } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // product: any =
  //   {
  //     id: 1,
  //     name: 'SAHOO TOMATO SEEDS [TO-3251]',
  //     description: 'Description for Product 1',
  //     price: 29.99,
  //     imageUrl:'https://cdn.shopify.com/s/files/1/0722/2059/products/Sahoo.jpg?v=1671198625&width=300',
  //     rating: 4.5,
  //   }

  //   data:any={
  //     "id": 1,
  //     "name": "testing",
  //     "category": "1",
  //     "actual_price": "900",
  //     "discount_price": null,
  //     "image": null,
  //     "other_images": null,
  //     "discount_percentage": null,
  //     "rating": null
  // }

  products: any[] = [];
  

  constructor(private productServ: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log('calling api..');
    
    this.productServ.getAllProducts().subscribe({
      next: (res: any) => {
        console.log('api response',res);
        
        if (res.success === 1) {
          this.products = res.data;
          console.log(this.products, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log('Api call fail',e);
      },
    });
  }


}
