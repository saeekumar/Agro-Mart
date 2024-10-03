import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProductService {


  constructor(private http:HttpClient) {}

    getAllProducts():Observable<any>{
      // let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzg4MzM4NiwiZXhwIjoxNzI3ODk0MTg2fQ.O1Nea40Slj8-SXM3wBwyu3D2KGD8anYHrPSIpV-IuL0'); 
      return this.http.get('http://localhost:3000/api/products')
    }
   
}



