import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlist: any[] = [];
  constructor() { }

  addToWishlist(product: any) {
    if (!this.wishlist.find(item => item.id === product.id)) {
      this.wishlist.push(product);
    }
  }
  removeFromWishlist(product: any) {
    this.wishlist = this.wishlist.filter(item => item.id !== product.id);
  }

  getWishlist() {
    return this.wishlist;
  }
}
