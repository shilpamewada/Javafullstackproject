import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  mobileNumber: string = '';
  address: string = '';
  voterId: string = '';
  password: string = '';

  constructor() {}

  register() {
    // Example: Log registration details
    console.log('Registration submitted:', this.fullName, this.email, this.mobileNumber, this.address, this.voterId, this.password);
    // Add logic here to send registration data to server
  }
}
