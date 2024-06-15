import { Component } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {
  mobileNumber: string = '';
  otp: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  otpSent: boolean = false;
  otpSentSuccessfully: boolean = false;
  otpVerified: boolean = false;

  requestOtp(): void {
    // Simulate OTP request (replace with actual logic to send OTP to mobile)
    this.otpSentSuccessfully = true;
    setTimeout(() => {
      this.otpSent = true;
    }, 2000); // Simulating delay for OTP to be sent
  }

  verifyOtp(): void {
    // Simulate OTP verification (replace with actual logic to verify OTP)
    if (this.otp === '123456') { // Replace '123456' with your actual OTP logic
      this.otpVerified = true;
    } else {
      // Handle invalid OTP scenario
      alert('Invalid OTP. Please try again.');
      this.otp = ''; // Clear OTP input
    }
  }

  resetPassword(): void {
    // Implement logic to reset password here
    console.log('Resetting password...');
    // Example logic to demonstrate password reset
    if (this.newPassword === this.confirmPassword) {
      console.log('Password reset successful');
      // Reset state for next request
      this.otpSent = false;
      this.otpSentSuccessfully = false;
      this.mobileNumber = '';
      this.otp = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.otpVerified = false;
    } else {
      console.log('Passwords do not match');
      // Handle password mismatch error
    }
  }
}
