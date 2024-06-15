// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedFlag = false;

  // Simulating authentication status
  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  login(): void {
    // Implement login logic (not shown in your provided code)
    this.isAuthenticatedFlag = true;
  }

  logout(): void {
    // Implement logout logic (not shown in your provided code)
    this.isAuthenticatedFlag = false;
  }
}
