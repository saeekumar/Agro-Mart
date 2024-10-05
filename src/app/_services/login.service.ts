import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }
    IsLoggedIn(){
      return localStorage.getItem('token')!=null;
    }
  

  loginEmployee(data:any):Observable<any>{
  return this.http.post('http://localhost:3000/api/employees/login',data)
  }
  contact(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/api/employees/login',data)
  }
  

  setToken(token:any){
    // console.log("token",token)
    localStorage.setItem('token',token);
    return 'success';
  }
  getToken(){
    return localStorage.getItem('token');
  }

}
