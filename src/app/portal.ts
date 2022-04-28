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
 * @title Select in a form
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

  countries: Dropdown[] = [
    {value: 'UK', viewValue: 'United Kingdom'},
    {value: 'USA', viewValue: 'United States of America'},
  ];

  types: Dropdown[] = [
    {value: 'CPA', viewValue: 'CPA'},
    {value: 'SME', viewValue: 'Small to Medium Enterprise'},
  ];

  public save(): void {

    // this.membersService.updateMember(this.member)
    // .subscribe(data => {
    //   this.status = "Saved successfully";
    // });

  }
}

