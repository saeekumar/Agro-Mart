import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

    getCategoryById():Observable<any>{

      let headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzg1Mjc5NSwiZXhwIjoxNzI3ODYzNTk1fQ.96J9S3_RWrlXaMJwwyvE13XxxdXRcPM0dMWpFwffY4E');
      
      return this.http.get('http://localhost:3000/api/category', {headers})
    }
   
}