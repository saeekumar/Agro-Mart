import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  createCustomer(data: any): Observable<any> {
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzc1OTQ5NiwiZXhwIjoxNzI3NzcwMjk2fQ.UXKjmS8tJl5XeZj1zl6y9cKbQ6G0BJgHFBIyzLPPJWE'
    );
    return this.http.post(
      'http://localhost:3000/api/employees/add-employee',
      data,
      { headers }
    );
  }
}
