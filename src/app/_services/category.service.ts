import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:3001/api/category';

  constructor(private http:HttpClient) {}

    getCategoryById(id:any):Observable<any>{

      let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyODEwODk5NCwiZXhwIjoxNzI4MTE5Nzk0fQ.xd9cxmuQwjVl0SFhq6klfHqxAxFfdXfNmR2CHuWBLLA');
      
      return this.http.get(`${this.baseUrl}/${id}`, {headers})
    }

    getCategories():Observable<any>{
      let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyODEwODk5NCwiZXhwIjoxNzI4MTE5Nzk0fQ.xd9cxmuQwjVl0SFhq6klfHqxAxFfdXfNmR2CHuWBLLA');

      return this.http.get('http://localhost:3001/api/category',{headers})
    }
   
}


