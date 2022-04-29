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

  customerName: string = "";
  selectedCountry: string;
  selectedType: string;
  leasesPurchased: number;
  expires = new Date();
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

    this.message = "";
    var access_token: string;

    // Get the access token
    this.apiService.getToken().subscribe((data) => {
      access_token = data;

      // Now signUp the customer
      this.apiService.signUp(this.customerName, this.selectedCountry, this.selectedType, this.leasesPurchased, this.expires, this.email, this.fullname, this.code, access_token).subscribe((data) => {
        //console.log(data);

        if (data == null) {

          this.message = "Success - please check your email for login information!";

        } else {

          for (const [key, value] of Object.entries(data.error.modelState)) {
            console.log(`${value}`);
  
            this.message += value + "<br/>";
          }
  
        }
      })
    });
  }
}

