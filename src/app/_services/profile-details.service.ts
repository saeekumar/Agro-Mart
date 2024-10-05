import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {

 
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyODEzMTE5OSwiZXhwIjoxNzI4MTQxOTk5fQ.gxuP8LJKBkE0q4DF232b42EoKoI4Gak47SmeBmIZazo'
    );

    return this.http.get('http://localhost:3001/api/employees/employees-list', {
      headers,
    });
  }


  
  // updateProfileDetails(data: any, ): Observable<any> {
  //   let headers = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyODEwOTU1OCwiZXhwIjoxNzI4MTIwMzU4fQ._T7WIBpF7TQjeqxM4FZnh_DrUkge8uEzqr5UsUlieLY'
  //   );

  //   return this.http.put('http://localhost:3001/api/employees/edit-employee', {
  //     headers,
  //   });
  // }
  
}
