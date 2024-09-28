import { Component } from '@angular/core';
import { WishlistService } from 'src/app/_services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistItems: any[]=[];

  constructor(private wishlistService: WishlistService) {
  
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishlistItems = this.wishlistService.getWishlist();
  }
    removeFromWishlist(item: any) {
    this.wishlistService.removeFromWishlist(item); 
    this.loadWishlist(); 
  }
}
