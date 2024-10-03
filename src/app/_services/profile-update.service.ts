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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6InNhaSBrdW1hciIsInBob25lIjoiOTU1MDI4NDMxOSIsImlhdCI6MTcyNzg0ODkwNiwiZXhwIjoxNzI3ODU5NzA2fQ.CPhUZY1dlrmvIOj8xXCsPyAscSPCYGL-iO0RztUw45k'
    );

    return this.http.get('http://localhost:3000/api/employees/employees-list', {
      headers,
    });
  }
}
