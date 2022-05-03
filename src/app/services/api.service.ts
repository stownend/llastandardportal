import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { map, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // apiRoot:string = "https://localhost:44336";
  // tokenRoot: string = "https://llastandardtest1.auth.eu-west-2.amazoncognito.com";
  // client_id: string = "4ba2r5fkr2gth2ki0b8ou4j38a";
  // client_secret: string = "1hpt93tqgiev5joep126fk61lu7us2sa0fpe2frabm4kkon6ngot";
  // scope:string = "https://localhost:44336/api/customerSignUp";

  apiRoot:string = "https://dev-a.innervision.co.uk";
  tokenRoot: string = "https://llastandardstaging1.auth.eu-west-2.amazoncognito.com";
  client_id: string = "2n5gosf055f559ek9u5ncv9ckn";
  client_secret: string = "1rk320bv2brd4t7abi6ondmi3l490fg6v62sm2cpeopc2gbovfsd";
  scope:string = "https://localhost:44336/api/customerSignUp";

  constructor(private http: HttpClient) { }
  
  getToken() {

    
    var body: HttpParams = new HttpParams()
    .set("client_id", this.client_id)
    .set("client_secret", this.client_secret)
    .set("grant_type", "client_credentials")
    .set("scope", this.scope)
      
    return this.http.post<Token>(this.tokenRoot + "/oauth2/token",
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(map(token => token.access_token));
    
  }

  signUp(customerName: string, countryCode: string, customerType: string, leasesPurchased: number, licenceExpires: Date, email: string, fullname: string, code: string, access_token: string) {

    var auth = new HttpHeaders().set('Authorization', 'Bearer ' + access_token);


    return this.http.post(this.apiRoot + "/v1/onboarding/signup",
          {
            "CustomerName": customerName,
            "CountryCode": countryCode,
            "CustomerType": customerType,
            "LeasesPurchased": leasesPurchased,
            "LicenceExpires": licenceExpires,
            "UserEmail": email,
            "UserFullName": fullname,
            "Code": code
          }, 
          { 
            headers: auth
          }
        ).pipe(catchError(val => of(val)))

  }
}
