import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url=environment.api_url

@Injectable({
  providedIn: 'root',
})

export class SignupService {
  
  constructor(private http: HttpClient) {}

  createCustomer(data: any): Observable<any> {
    return this.http.post(`${url}employees/add-employee`,data);
  }
}
