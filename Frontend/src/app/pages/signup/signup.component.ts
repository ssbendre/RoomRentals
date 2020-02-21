import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submitUserDetails(): void {
    this.userService.postCustomerDataById({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }).subscribe(val => {

    });
  }

}
