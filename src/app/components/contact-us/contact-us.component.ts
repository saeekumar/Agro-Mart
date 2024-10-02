import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  constructor(private router: Router, private loginServ: LoginService) {
    this.contactForm = new FormGroup({
      fullname: new FormControl('', [Validators.minLength(5)]),
      email: new FormControl('', [Validators.minLength(6)]),
      phone: new FormControl('', [Validators.minLength(10)]),
      message: new FormControl('', [Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log('login called', this.contactForm.value, this.contactForm.controls);
    // console.log(this.contact,"login successfully")
    if (this.contactForm.valid) {
      this.loginServ.contact(this.contactForm.value).subscribe({
        next: (res) => {
          if (res.success === 1) {
            this.loginServ.setToken(res.data.accessToken);
            alert(res.msg);
          } else {
            alert(res.msg);
          }
        },
        error: (e) => {},
      });
    } else {
      alert('invalid form');
    }

    //  alert("login sucessfully")
  }

  get contactFC() {
    return this.contactForm.controls;
  }
}

// this.contactForm.reset();
// this.router.navigate(['']);
