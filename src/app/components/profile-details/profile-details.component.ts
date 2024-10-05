import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { ProfileDetailsService } from 'src/app/_services/profile-details.service';



@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  data: any[] = [];
  selectedValue: any;
  empDetails: any;
  users:any;

  constructor(private profileServ: ProfileDetailsService) {
   
  }

  ngOnInit(){
    this.getProfileData();
  }
  getProfileData() {
    this.profileServ.getProfileDetails().subscribe({
      next: (res:any) => {
        if (res.success === 1) {
          this.empDetails = res.data[0];
          console.log(this.empDetails, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e:any) => {
        // console.log(e.msg);
        console.log(e, 'error');
      },
    });
  }
}
