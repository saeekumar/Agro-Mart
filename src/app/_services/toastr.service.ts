import { Injectable } from '@angular/core';
import { ToastrService as NgxToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastr: NgxToastrService) { }
  success(message: string, title?: string) {
    this.toastr.success(message, title || 'Success', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    });
  }

  // Error message
  error(message: string, title?: string) {
    this.toastr.error(message, title || 'Error', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    });
  }
}
