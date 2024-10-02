import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;

  

  constructor( private router:Router,private loginServ:LoginService){

    this.loginForm = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
    });
    
  }
  ngOnInit(): void {}
  checkLogin() {
    console.log('login called', this.loginForm.value, this.loginForm.valid);
    if (this.loginForm.valid) {
      this.loginServ.loginEmployee(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.success === 1) {
            this.loginServ.setToken(res.data.accessToken);
            alert(res.msg);
            this.loginForm.reset();
            this.router.navigate(['']);
          } else {
            alert(res.msg);
          }
        },
        error: (e) => {},
      });
    } else {
      alert('invalid form');
    }

    alert("login sucessfully")   
  }

  getfun(password: any) {
    localStorage.setItem('num', password);
    this.router.navigate(['']);
  }

  get loginFC(){
    return this.loginForm.controls;
  }

 
}