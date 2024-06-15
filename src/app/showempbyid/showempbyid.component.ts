import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showempbyid',
  templateUrl: './showempbyid.component.html',
  styleUrl: './showempbyid.component.css'
})
export class ShowempbyidComponent {

  msg: any;
  emp: any;
  employees: any;
  emailId: any;

  constructor(private service: EmpService) {
    this.msg = "";
    this.emailId = localStorage.getItem('emailId');
  }

  getEmployee(empForm: any) {
    this.emp = null;

    this.service.getEmpById(empForm.empId).subscribe((data: any) => {
      console.log(data);
      this.emp = data;
    });

    if (this.emp == null) {
      this.msg = "Employee Record Not Found!!!";
    }
  }
  
}
