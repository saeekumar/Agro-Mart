import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileUpdateService {
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<any> {
    let headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzg0MDcwNCwiZXhwIjoxNzI3ODUxNTA0fQ.npzDZPcdf5Lm4xz-Naw-Zur-BAdFV625aBI92QGlILk'
    );

    return this.http.get('http://localhost:3000/api/employees/employees-list', {
      headers,
    });
  }
}
