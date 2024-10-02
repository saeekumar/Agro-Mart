import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

    getCategoryById():Observable<any>{

      let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzc4Mjc1MiwiZXhwIjoxNzI3NzkzNTUyfQ.x-HYFwVM9u5WHWiBsA090ZHrDtQisXS7XRBSxsILNvQ');
      
      return this.http.get('http://localhost:3000/api/category', {headers})
    }
   
}