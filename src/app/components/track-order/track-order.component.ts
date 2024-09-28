import { Component } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  orderDetails:any;
 
  constructor(){}
 
  ngOnInit(): void {
    // this.orderId = this.route.snapshot.paramMap.get('id')!;
    this.orderDetails = {
      id: '123456',
      expectedArrival: '2024-10-01',
      trackingNumber: '1Z999AA10123456784',
      status:1
    };
 
  }
}
