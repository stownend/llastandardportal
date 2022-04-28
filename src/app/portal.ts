import {Component} from '@angular/core';

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

    this.message = "Success - please check your email for login information!";
    // this.membersService.updateMember(this.member)
    // .subscribe(data => {
    //   this.status = "Saved successfully";
    // });

  }
}

