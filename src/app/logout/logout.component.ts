import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  //Dependency Injection for Router Class from RouterModule & EmpService
  constructor(private router: Router, private service: EmpService) {
    this.service.setIsUserLoggedOut();
    
    localStorage.removeItem('emailId');
    localStorage.clear();

    router.navigate(['login']);
  }

}
