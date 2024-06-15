// header.component.ts

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Assuming AuthService is implemented

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuActive = false;
  isSticky = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  logout() {
    this.authService.logout(); // Call logout method from AuthService
    this.router.navigate(['/login']); // Navigate to login page after logout
  }

  isAuthenticated() {
    return this.authService.isAuthenticated(); // Check if user is authenticated
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset > 0;
  }
}
