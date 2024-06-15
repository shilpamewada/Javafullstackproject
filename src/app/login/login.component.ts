import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  requestOtp() {
    // Implement OTP request logic here
    alert('OTP requested.');
  }

  onSubmit() {
    // Implement login logic here
    alert('Login submitted.');
  }
}
