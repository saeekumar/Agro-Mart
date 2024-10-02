import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/_services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private signUpServ:SignupService) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$') 
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submit(){
    console.log(this.signUpForm.value)
    if(this.signUpForm.valid){
    this.signUpServ.createCustomer(this.signUpForm.value).subscribe({next:(res)=>{
      if(res.status_code==200){
        alert(res.message);
        
      }else{
        alert(res.msg)
      }
    },error:(err)=>{
      console.log("error",err)
    }
  });
}else{
  alert("Invalid Form")
}
}
  get signUpFC() {
    return this.signUpForm.controls;
  }
}
