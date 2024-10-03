// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null; // or whatever your type is

  constructor() {
    // Logic to initialize token, e.g., from local storage
    this.token = localStorage.getItem('authToken'); // Ensure this retrieves a string
  }

  getToken(): string | null {
    return this.token;
  }
}