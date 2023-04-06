import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

// using two way binding we can check if required fields are filled
// if thety are not filled we can display error message next to login button

username = "";
password = "";
errorMsg = "";

login() {
  if (this.username.trim().length === 0) {
    this.errorMsg = "Username is required."
  } else if (this.password.trim().length === 0) {
    this.errorMsg = "Password is required."
  } 
}

}
