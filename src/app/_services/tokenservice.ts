import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {}
  contact(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/api/employees/login',data)
  }
  setToken(token:any){
    localStorage.setItem('token',token);
    return 'success';
  }
  getToken(){
    return localStorage.getItem('token');
  }

}
