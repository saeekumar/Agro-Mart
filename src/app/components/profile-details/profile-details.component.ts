import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { ProfileUpdateService } from 'src/app/_services/profile-update.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  data: any[] = [];
  selectedValue: any;
  empDetails: any;

  constructor(private profileServ: ProfileUpdateService) {
    this.getProfileData();
  }
  getProfileData() {
    this.profileServ.getProfileDetails().subscribe({
      next: (res) => {
        if (res.success === 1) {
          this.empDetails = res.data[0];
          console.log(this.empDetails, 'new data');
        } else {
          console.log(res.msg);
        }
      },
      error: (e) => {
        console.log(e.msg);
        console.log(e, 'error');
      },
    });
  }
}
