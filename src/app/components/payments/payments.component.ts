import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  paymentStatus: 'success' | 'failure' | null = null;

  processPayment() {
    this.paymentStatus = Math.random() > 0.5 ? 'success' : 'failure';
  }
  resetPayment() {
    this.paymentStatus = null;
  }
}
