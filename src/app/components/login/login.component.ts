import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm:FormGroup;

    constructor( private router:Router){

      this.loginForm = new FormGroup({
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      });
      
    }

    


    ngOnInit(): void {}
    checkLogin() {
      alert("login sucessfully")
    }
    get loginFC(){
      return this.loginForm.controls;
    }
}
