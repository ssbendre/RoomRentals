import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIUrl;

  constructor( public http: HttpClient ) {
    this.APIUrl = 'http://localhost:3000/users';
  }

  public getCustomerData() {
    return this.http.get(this.APIUrl);
  }

  public getCustomerDataById(customerId) {
    return this.http.get(this.APIUrl, customerId);
  }

  public postCustomerDataById(customerObj) {
    return this.http.post(this.APIUrl, customerObj);
  }
}
