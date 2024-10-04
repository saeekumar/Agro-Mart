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
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzk2MjU1NywiZXhwIjoxNzI3OTczMzU3fQ.MrBvDW9G0H47X76yE6S2Q73mI7as_TIpgkgOdC6P-FU'
    );
    return this.http.post(`${url}employees/add-employee`,data,{ headers });
  }
}
