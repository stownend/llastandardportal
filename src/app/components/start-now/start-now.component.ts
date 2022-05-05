import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

interface Dropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-start-now',
  templateUrl: './start-now.component.html',
  styleUrls: ['./start-now.component.scss']
})
export class StartNowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
      this.route.params.subscribe(params => {
        // console.log("Customer type: " + params.customerType);
        // console.log("Start type: " + params.startType);

        this.selectedType = params.customerType;
        this.startType = params.startType;
      });

      this.captcha = "";
   }

  ngOnInit(): void {
    //this.loadStripe();
  }

  resolvedCaptcha(captchaResponse: string) {
    this.captcha = captchaResponse;
  }

  hasPaid(): boolean {
    return (<any>window).paymentToken != "";
  }

  pay() {

    var amount: number = 0;

    if (this.selectedType == 'SME') {
      amount = 56;
    } else if (this.selectedType == 'CPA') {
      amount = 121 + 10 * this.bundleCount;
    }

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kvzd2Ki9NY5HneSjyGE2VDHiOt12r5wvR2YICTMNX5qiKfcRu7qVkMEhiZn1aIlbH26EO4jo6DZk2T6PNxnH92a00KOhBR1Go',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        (<any>window).paymentToken = token;
      }
    });
 
    handler.open({
      name: 'IRIS Lease Accounting',
      description: 'for ' + this.selectedType + 's',
      amount: amount * 100
    });
  }



  handler:any = null;

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kvzd2Ki9NY5HneSjyGE2VDHiOt12r5wvR2YICTMNX5qiKfcRu7qVkMEhiZn1aIlbH26EO4jo6DZk2T6PNxnH92a00KOhBR1Go',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
  captcha: string;

  startType: string = "";

  customerName: string = "";
  address: string = "";
  selectedCountry: string = "";
  selectedState: string = "";
  selectedType: string;
  leasesPurchased: number;
  bundleCount: number;
  expires = new Date();
  email: string;
  fullname: string;
  code: string;
  
  message: string = "";

  countries: Dropdown[] = [
    {value: 'AD', viewValue: 'Andorra'},
    {value: 'AE', viewValue: 'United Arab Emirates'},
    {value: 'AF', viewValue: 'Afghanistan'},
    {value: 'AG', viewValue: 'Antigua Barbuda'},
    {value: 'AI', viewValue: 'Anguilla'},
    {value: 'AL', viewValue: 'Albania'},
    {value: 'AM', viewValue: 'Armenia'},
    {value: 'AN', viewValue: 'Netherlands Antilles'},
    {value: 'AO', viewValue: 'Angola'},
    {value: 'AP', viewValue: 'Azores'},
    {value: 'AR', viewValue: 'Argentina'},
    {value: 'AS', viewValue: 'American Samoa'},
    {value: 'AT', viewValue: 'Austria'},
    {value: 'AU', viewValue: 'Australia'},
    {value: 'AW', viewValue: 'Aruba'},
    {value: 'AZ', viewValue: 'Azerbaijan'},
    {value: 'BA', viewValue: 'Bosnia and Herzegovina'},
    {value: 'BB', viewValue: 'Barbados'},
    {value: 'BD', viewValue: 'Bangladesh'},
    {value: 'BE', viewValue: 'Belgium'},
    {value: 'BF', viewValue: 'Burkina Faso'},
    {value: 'BG', viewValue: 'Bulgaria'},
    {value: 'BH', viewValue: 'Bahrain'},
    {value: 'BI', viewValue: 'Burundi'},
    {value: 'BJ', viewValue: 'Benin'},
    {value: 'BL', viewValue: 'Bonaire'},
    {value: 'BM', viewValue: 'Bermuda'},
    {value: 'BN', viewValue: 'Brunei'},
    {value: 'BO', viewValue: 'Bolivia'},
    {value: 'BR', viewValue: 'Brazil'},
    {value: 'BS', viewValue: 'Bahamas'},
    {value: 'BT', viewValue: 'Bhutan'},
    {value: 'BW', viewValue: 'Botswana'},
    {value: 'BY', viewValue: 'Belarus'},
    {value: 'BZ', viewValue: 'Belize'},
    {value: 'CA', viewValue: 'Canada'},
    {value: 'CB', viewValue: 'Curacao'},
    {value: 'CD', viewValue: 'Channel Islands'},
    {value: 'CF', viewValue: 'Central African Republic'},
    {value: 'CG', viewValue: 'Congo'},
    {value: 'CH', viewValue: 'Switzerland'},
    {value: 'CI', viewValue: 'Ivory Coast'},
    {value: 'CK', viewValue: 'Cook Islands'},
    {value: 'CL', viewValue: 'Chile'},
    {value: 'CM', viewValue: 'Cameroon'},
    {value: 'CN', viewValue: 'China'},
    {value: 'CO', viewValue: 'Colombia'},
    {value: 'CR', viewValue: 'Costa Rica'},
    {value: 'CU', viewValue: 'Cuba'},
    {value: 'CV', viewValue: 'Cape Verde Islands'},
    {value: 'CY', viewValue: 'Cyprus'},
    {value: 'CZ', viewValue: 'Czech Republic'},
    {value: 'DE', viewValue: 'Germany'},
    {value: 'DJ', viewValue: 'Djibouti'},
    {value: 'DK', viewValue: 'Denmark'},
    {value: 'DM', viewValue: 'Dominica'},
    {value: 'DO', viewValue: 'Dominican Republic'},
    {value: 'DZ', viewValue: 'Algeria'},
    {value: 'EC', viewValue: 'Ecuador'},
    {value: 'EE', viewValue: 'Estonia'},
    {value: 'EG', viewValue: 'Egypt'},
    {value: 'EN', viewValue: 'England'},
    {value: 'ER', viewValue: 'Eritrea'},
    {value: 'ES', viewValue: 'Spain'},
    {value: 'ET', viewValue: 'Ethiopia'},
    {value: 'EU', viewValue: 'St. Eustatius'},
    {value: 'FI', viewValue: 'Finland'},
    {value: 'FJ', viewValue: 'Fiji'},
    {value: 'FM', viewValue: 'Fed States of Micronesia'},
    {value: 'FO', viewValue: 'Faeroe Islands'},
    {value: 'FR', viewValue: 'France'},
    {value: 'GA', viewValue: 'Gabon'},
    {value: 'GD', viewValue: 'Grenada'},
    {value: 'GE', viewValue: 'Georgia'},
    {value: 'GF', viewValue: 'French Guiana'},
    {value: 'GH', viewValue: 'Ghana'},
    {value: 'GI', viewValue: 'Gibraltar'},
    {value: 'GL', viewValue: 'Greenland'},
    {value: 'GM', viewValue: 'Gambia'},
    {value: 'GN', viewValue: 'Guinea'},
    {value: 'GP', viewValue: 'Guadeloupe'},
    {value: 'GQ', viewValue: 'Equitorial Guinea'},
    {value: 'GR', viewValue: 'Greece'},
    {value: 'GT', viewValue: 'Guatemala'},
    {value: 'GU', viewValue: 'Guam'},
    {value: 'GW', viewValue: 'Guinea-Bissau'},
    {value: 'GY', viewValue: 'Guyana'},
    {value: 'HK', viewValue: 'Hong Kong'},
    {value: 'HN', viewValue: 'Honduras'},
    {value: 'HO', viewValue: 'Holland'},
    {value: 'HR', viewValue: 'Croatia'},
    {value: 'HT', viewValue: 'Haiti'},
    {value: 'HU', viewValue: 'Hungary'},
    {value: 'IC', viewValue: 'Canary Islands'},
    {value: 'ID', viewValue: 'Indonesia'},
    {value: 'IE', viewValue: 'Republic of Ireland'},
    {value: 'IL', viewValue: 'Israel'},
    {value: 'IN', viewValue: 'India'},
    {value: 'IQ', viewValue: 'Iraq'},
    {value: 'IR', viewValue: 'Ireland'},
    {value: 'IS', viewValue: 'Iceland'},
    {value: 'IT', viewValue: 'Italy'},
    {value: 'JM', viewValue: 'Jamaica'},
    {value: 'JO', viewValue: 'Jordan'},
    {value: 'JP', viewValue: 'Japan'},
    {value: 'KE', viewValue: 'Kenya'},
    {value: 'KG', viewValue: 'Kyrgyzstan'},
    {value: 'KH', viewValue: 'Cambodia'},
    {value: 'KI', viewValue: 'Kiribati'},
    {value: 'KM', viewValue: 'Comoros'},
    {value: 'KN', viewValue: 'St. Kitts Nevis'},
    {value: 'KO', viewValue: 'Kosrae'},
    {value: 'KP', viewValue: 'Korea (North)'},
    {value: 'KR', viewValue: 'Korea (South)'},
    {value: 'KW', viewValue: 'Kuwait'},
    {value: 'KY', viewValue: 'Cayman Islands'},
    {value: 'KZ', viewValue: 'Kazakhstan'},
    {value: 'LA', viewValue: 'Laos'},
    {value: 'LB', viewValue: 'Lebanon'},
    {value: 'LC', viewValue: 'St. Lucia'},
    {value: 'LI', viewValue: 'Liechtenstein'},
    {value: 'LK', viewValue: 'Sri Lanka'},
    {value: 'LR', viewValue: 'Liberia'},
    {value: 'LS', viewValue: 'Lesotho'},
    {value: 'LT', viewValue: 'Lithuania'},
    {value: 'LU', viewValue: 'Luxembourg'},
    {value: 'LV', viewValue: 'Latvia'},
    {value: 'LY', viewValue: 'Libya'},
    {value: 'MA', viewValue: 'Morocco'},
    {value: 'MB', viewValue: 'St. Maarten'},
    {value: 'MC', viewValue: 'Monaco'},
    {value: 'MD', viewValue: 'Moldova'},
    {value: 'ME', viewValue: 'Madeira'},
    {value: 'MG', viewValue: 'Madagascar'},
    {value: 'MH', viewValue: 'Marshall Islands'},
    {value: 'MK', viewValue: 'Macedonia'},
    {value: 'ML', viewValue: 'Mali'},
    {value: 'MM', viewValue: 'Myanmar'},
    {value: 'MN', viewValue: 'Mongolia'},
    {value: 'MO', viewValue: 'Macau'},
    {value: 'MP', viewValue: 'Northern Mariana Islands'},
    {value: 'MQ', viewValue: 'Martinique'},
    {value: 'MR', viewValue: 'Mauritania'},
    {value: 'MS', viewValue: 'Montserrat'},
    {value: 'MT', viewValue: 'Malta'},
    {value: 'MU', viewValue: 'Mauritius'},
    {value: 'MV', viewValue: 'Maldives'},
    {value: 'MW', viewValue: 'Malawi'},
    {value: 'MX', viewValue: 'Mexico'},
    {value: 'MY', viewValue: 'Malaysia'},
    {value: 'MZ', viewValue: 'Mozambique'},
    {value: 'NA', viewValue: 'Namibia'},
    {value: 'NB', viewValue: 'Northern Ireland'},
    {value: 'NC', viewValue: 'New Caledonia'},
    {value: 'NE', viewValue: 'Niger'},
    {value: 'NF', viewValue: 'Norfolk Island'},
    {value: 'NG', viewValue: 'Nigeria'},
    {value: 'NI', viewValue: 'Nicaragua'},
    {value: 'NL', viewValue: 'Netherlands'},
    {value: 'NO', viewValue: 'Norway'},
    {value: 'NP', viewValue: 'Nepal'},
    {value: 'NR', viewValue: 'Nauru'},
    {value: 'NT', viewValue: 'St. Barthelemy'},
    {value: 'NZ', viewValue: 'New Zealand'},
    {value: 'OM', viewValue: 'Oman'},
    {value: 'PA', viewValue: 'Panama'},
    {value: 'PE', viewValue: 'Peru'},
    {value: 'PF', viewValue: 'French Polynesia'},
    {value: 'PG', viewValue: 'Papua New Guinea'},
    {value: 'PH', viewValue: 'Philippines'},
    {value: 'PK', viewValue: 'Pakistan'},
    {value: 'PL', viewValue: 'Poland'},
    {value: 'PO', viewValue: 'Ponape'},
    {value: 'PR', viewValue: 'Puerto Rico'},
    {value: 'PT', viewValue: 'Portugal'},
    {value: 'PW', viewValue: 'Palau'},
    {value: 'PY', viewValue: 'Paraguay'},
    {value: 'QA', viewValue: 'Qatar'},
    {value: 'RE', viewValue: 'Reunion'},
    {value: 'RO', viewValue: 'Romania'},
    {value: 'RS', viewValue: 'Serbia'},
    {value: 'RT', viewValue: 'Rota'},
    {value: 'RU', viewValue: 'Russia'},
    {value: 'RW', viewValue: 'Rwanda'},
    {value: 'SA', viewValue: 'Saudi Arabia'},
    {value: 'SB', viewValue: 'Solomon Islands'},
    {value: 'SC', viewValue: 'Seychelles'},
    {value: 'SD', viewValue: 'Sudan'},
    {value: 'SE', viewValue: 'Sweden'},
    {value: 'SF', viewValue: 'Scotland'},
    {value: 'SG', viewValue: 'Singapore'},
    {value: 'SI', viewValue: 'Slovenia'},
    {value: 'SK', viewValue: 'Slovakia'},
    {value: 'SL', viewValue: 'Sierra Leone'},
    {value: 'SM', viewValue: 'San Marino'},
    {value: 'SN', viewValue: 'Senegal'},
    {value: 'SO', viewValue: 'Somalia'},
    {value: 'SP', viewValue: 'Saipan'},
    {value: 'SR', viewValue: 'Suriname'},
    {value: 'SS', viewValue: 'Saba'},
    {value: 'ST', viewValue: 'Sao Tome and Principe'},
    {value: 'SV', viewValue: 'El Salvador'},
    {value: 'SW', viewValue: 'St. Christopher'},
    {value: 'SX', viewValue: 'St. Croix'},
    {value: 'SY', viewValue: 'Syria'},
    {value: 'SZ', viewValue: 'Swaziland'},
    {value: 'TA', viewValue: 'Tahiti'},
    {value: 'TB', viewValue: 'St. Martin'},
    {value: 'TC', viewValue: 'Turks Caicos Islands'},
    {value: 'TD', viewValue: 'Chad'},
    {value: 'TG', viewValue: 'Togo'},
    {value: 'TH', viewValue: 'Thailand'},
    {value: 'TI', viewValue: 'Tinian'},
    {value: 'TJ', viewValue: 'Tajikistan'},
    {value: 'TL', viewValue: 'Tortola'},
    {value: 'TM', viewValue: 'Turkmenistan'},
    {value: 'TN', viewValue: 'Tunisia'},
    {value: 'TO', viewValue: 'Tonga'},
    {value: 'TP', viewValue: 'East Timor'},
    {value: 'TR', viewValue: 'Turkey'},
    {value: 'TT', viewValue: 'Trinidad Tobago'},
    {value: 'TU', viewValue: 'Truk'},
    {value: 'TV', viewValue: 'Tuvalu'},
    {value: 'TW', viewValue: 'Taiwan'},
    {value: 'TZ', viewValue: 'Tanzania'},
    {value: 'UA', viewValue: 'Ukraine'},
    {value: 'UG', viewValue: 'Uganda'},
    {value: 'UI', viewValue: 'Union Island'},
    {value: 'UK', viewValue: 'United Kingdom'},
    {value: 'US', viewValue: 'United States of America'},
    {value: 'UV', viewValue: 'St. John'},
    {value: 'UY', viewValue: 'Uruguay'},
    {value: 'UZ', viewValue: 'Uzbekistan'},
    {value: 'VA', viewValue: 'Vatican City'},
    {value: 'VC', viewValue: 'St. Vincent the Grenadines'},
    {value: 'VE', viewValue: 'Venezuela'},
    {value: 'VG', viewValue: 'British Virgin Islands'},
    {value: 'VI', viewValue: 'US Virgin Islands'},
    {value: 'VL', viewValue: 'St. Thomas'},
    {value: 'VN', viewValue: 'Vietnam'},
    {value: 'VR', viewValue: 'Virgin Gorda'},
    {value: 'VU', viewValue: 'Vanuatu'},
    {value: 'WF', viewValue: 'Wallis Futuna Islands'},
    {value: 'WK', viewValue: 'Wake Island'},
    {value: 'WL', viewValue: 'Wales'},
    {value: 'WS', viewValue: 'Western Samoa'},
    {value: 'XK', viewValue: 'Kosovo'},
    {value: 'YA', viewValue: 'Yap'},
    {value: 'YE', viewValue: 'Republic of Yemen'},
    {value: 'YU', viewValue: 'Yugoslavia'},
    {value: 'ZA', viewValue: 'South Africa'},
    {value: 'ZM', viewValue: 'Zambia'},
    {value: 'ZR', viewValue: 'Zaire'},
    {value: 'ZW', viewValue: 'Zimbabwe'}
  ];

  states: Dropdown[] = [
    {value: 'CA', viewValue: 'California'},
    {value: 'TX', viewValue: 'Texas'},
  ];

  types: Dropdown[] = [
    {value: 'CPA', viewValue: 'CPA'},
    {value: 'SME', viewValue: 'Small to Medium Enterprise'},
  ];

  public startTrial(): void {

    this.message = "";
    var access_token: string;

    // Get the access token
    this.apiService.getToken().subscribe((data) => {
      access_token = data;

      this.leasesPurchased = 3;
      this.expires = new Date();
      this.code = "level42";

      // Now signUp the customer
      this.apiService.signUp(this.customerName, this.selectedCountry, this.selectedType, this.leasesPurchased, this.expires, this.email, this.fullname, this.code, true, access_token).subscribe((data) => {
        //console.log(data);

        if (data == null) {

          this.message = "Success - Initial User should check their email for login information!";

        } else {

          for (const [key, value] of Object.entries(data.error.modelState)) {
            console.log(`${value}`);
  
            this.message += value + "<br/>";
          }
  
        }
      })
    });
  }

  public buyNow(): void {

    this.message = "";
    var access_token: string;

    // Get the access token
    this.apiService.getToken().subscribe((data) => {
      access_token = data;

      if (this.selectedType == 'SME')
      {
        this.leasesPurchased = 25;
      } else if (this.selectedType == 'CPA') {
        this.leasesPurchased = this.bundleCount * 25;
      }

      this.expires = new Date();
      this.code = "level42";

      // Now signUp the customer
      this.apiService.signUp(this.customerName, this.selectedCountry, this.selectedType, this.leasesPurchased, this.expires, this.email, this.fullname, this.code, false, access_token).subscribe((data) => {
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
