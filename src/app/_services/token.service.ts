import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private loginServ:LoginService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("interceptor called")
   
   let jwt=req.clone({
    setHeaders:{
      Authorization:`Bearer ${Token}`
    }
   })
     return next.handle(jwt)
 }
}
