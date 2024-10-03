import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
 
interface Order {
  id: string;
  status: number; // 1: Processed, 2: Shipped, 3: En Route, 4: Arrived
  expectedArrival: string;
  trackingNumber: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class TrackingService {
 
  private orders: Order[] = [
    { id: 'Y34XDHR', status: 4, expectedArrival: '01/12/19', trackingNumber: '234094567242423422898' },
    { id: 'A12BCD', status: 2, expectedArrival: '02/15/19', trackingNumber: '234094567242423422899' },
    // Add more orders as needed
  ];
 
  getOrderById(id: string): Order | undefined {
    return this.orders.find(order => order.id === id);
  }
   
 
}