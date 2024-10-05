import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/_services/signup.service';
import { ToastrService } from 'src/app/_services/toastr.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private signUpServ:SignupService,private toastrSer: ToastrService,private router:Router) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$') 
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    });
  }

  submit(){
    console.log(this.signUpForm.value)
    if(this.signUpForm.valid){
    this.signUpServ.createCustomer(this.signUpForm.value).subscribe({next:(res)=>{
      if(res.success==1){
        this.toastrSer.success(res.msg);
        this.signUpForm.reset()
        this.router.navigate([''])
      }else{
        alert(res.msg)
        this.toastrSer.error(res.msg);
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
