import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  
  getToken() {

    var body: HttpParams = new HttpParams()
    .set("client_id", "4ba2r5fkr2gth2ki0b8ou4j38a")
    .set("client_secret", "1hpt93tqgiev5joep126fk61lu7us2sa0fpe2frabm4kkon6ngot")
    .set("grant_type", "client_credentials")
    .set("scope", "https://localhost:44336/api/customerSignUp")
      
    return this.http.post<Token>("https://llastandardtest1.auth.eu-west-2.amazoncognito.com/oauth2/token",
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(map(token => token.access_token));

      /*
    var body: HttpParams = new HttpParams()
    .set("client_id", "2n5gosf055f559ek9u5ncv9ckn")
    .set("client_secret", "1rk320bv2brd4t7abi6ondmi3l490fg6v62sm2cpeopc2gbovfsd")
    .set("grant_type", "client_credentials")
    .set("scope", "https://localhost:44336/api/customerSignUp")
      
    return this.http.post<Token>("https://llastandardstaging1.auth.eu-west-2.amazoncognito.com/oauth2/token",
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(map(token => token.access_token));
      */
  }

  signUp(customerName: string, countryCode: string, customerType: string, leasesPurchased: number, licenceExpires: Date, email: string, fullname: string, access_token: string) {

    var auth = new HttpHeaders().set('Authorization', 'Bearer ' + access_token);

//    return this.http.post("https://dev-a.innervision.co.uk/v1/onboarding/signup",

    return this.http.post("https://localhost:44336/v1/onboarding/signup",
      {
        "CustomerName": customerName,
        "CountryCode": countryCode,
        "CustomerType": customerType,
        "LeasesPurchased": leasesPurchased,
        "LicenceExpires": licenceExpires,
        "UserEmail": email,
        "UserFullName": fullname
      }, 
      { 
        headers: auth
      }
    );

  }
}
