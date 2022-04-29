import {Component} from '@angular/core';
import { ApiService} from './services/api.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Dropdown {
  value: string;
  viewValue: string;
}


/**
 * @title LLA Standard - SignUp
 */
@Component({
  selector: 'portal',
  templateUrl: 'portal.html',
})
export class Portal {

  constructor(private apiService: ApiService) {
  }

  customerName: string;
  selectedCountry: string;
  selectedType: string;
  leasesPurchased: number;
  email: string;
  fullname: string;
  code: string;
  message: string = "";

  countries: Dropdown[] = [
    {value: 'UK', viewValue: 'United Kingdom'},
    {value: 'USA', viewValue: 'United States of America'},
  ];

  types: Dropdown[] = [
    {value: 'CPA', viewValue: 'CPA'},
    {value: 'SME', viewValue: 'Small to Medium Enterprise'},
  ];

  public save(): void {

    var access_token: string;

    // Get the access token
    this.apiService.getToken().subscribe((data) => {
      console.log(data);
      access_token = data;

      // Now signUp the customer
      this.apiService.signUp(this.customerName, this.selectedCountry, this.selectedType, this.leasesPurchased, new Date(), this.email, this.fullname, access_token).subscribe((data) => {
        console.log(data);
      })
    });

    //this.message = "Success - please check your email for login information!";
    // this.membersService.updateMember(this.member)
    // .subscribe(data => {
    //   this.status = "Saved successfully";
    // });

  }
}

