import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor(private loginServ:LoginService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("interceptor called")
    var token = localStorage.getItem('token');
    if (token) {
      let jwt = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(jwt);
    } else {
      let jwt = req.clone({
        setHeaders: {
          Content: `JSON`,
        },
      });
      return next.handle(jwt);
    }
 }
}
