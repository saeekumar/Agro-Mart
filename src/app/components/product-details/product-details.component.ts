import { Component } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any = {
    id: 1,
    name: 'SAHOO TOMATO SEEDS [TO-3251]',
    description: 'Description for Product 1',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0722/2059/products/Sahoo.jpg?v=1671198625&width=300',
    rating: 4.5,
  };

  productData: any;

  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productServ: ProductService
  ) {}
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // Get ID from route
    if (productId) {
      this.getProductbyId(productId); // Fetch product by ID
    } else {
      this.getProducts(); // Fetch all products
    }
  }

  getProducts() {
    // console.log('calling api..');
    this.productServ.getAllProducts().subscribe({
      next: (res: any) => {
        console.log('api response', res);
        if (res.success === 1) {
          this.products = res.data;
          console.log(this.products, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log('Api call fail', e);
      },
    });
  }

  getProductbyId(id: string) {
    // console.log('calling api..');
    this.productServ.getproductById(id).subscribe({
      next: (res: any) => {
        console.log('api response', res);
        if (res.success === 1) {
          this.products = res.data;
          console.log(this.products, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log('Api call fail', e);
      },
    });
  }

  getProductbycategory() {
    // console.log('calling api..');
    this.productServ.getproductBycategory().subscribe({
      next: (res: any) => {
        console.log('api response', res);
        if (res.success === 1) {
          this.products = res.data;
          console.log(this.products, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        // console.log(e.msg)
        console.log('Api call fail', e);
      },
    });
  }
}
