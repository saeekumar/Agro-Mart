import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$') 
      ])
    });
  }

  submit() {
    console.log(this.signUpFC)
    console.log(this.signUpForm.value)
    // if (this.signUpForm.valid) {
    //    console.log("Form Submitted", this.signUpForm.value);
    //    this.signUpForm.reset();
    // } else {
    //    console.log("Form is invalid");
      
    // }
  }
  get signUpFC() {
    return this.signUpForm.controls;
  }
}
