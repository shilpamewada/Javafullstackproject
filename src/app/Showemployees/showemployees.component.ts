import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

//For Modal Dialog Box
declare var jQuery: any;

@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrl: './showemployees.component.css'
})
export class ShowemployeesComponent implements OnInit {

  employees: any;
  emailId: any;
  editObj: any;
  departments: any;
  countries: any;
  
  constructor(private service: EmpService) {
    this.emailId = localStorage.getItem('emailId');    

    this.editObj = {
      "empId":"",
      "empName": "",
      "salary": "",
      "gender": "",
      "doj": "",
      "mobile": "",
      "country": "",
      "emailId": "",
      "password": "",
      "department": {
          "deptId": ""
      }
    }
  }

  ngOnInit() {
    this.service.getAllEmployees().subscribe((data: any) => { this.employees = data; });
    this.service.getAllCountries().subscribe((data: any) => { this.countries = data; });
    this.service.getAllDepartments().subscribe((data: any) => { this.departments = data; });
  }

  editEmp(emp: any) {
    this.editObj = emp;
    console.log(this.editObj);

    jQuery("#editEmp").modal('show');
  }

  updateEmployee() {
    console.log(this.editObj);
    this.service.updateEmployee(this.editObj).subscribe((data: any) => { console.log(data); });
  }

  deleteEmp(empId: any) {

    this.service.deleteEmployee(empId).subscribe((data: any) => { console.log(data); });

    const i = this.employees.findIndex((element: any) => {
      return element.empId == empId;
    });
    this.employees.splice(i, 1);

    alert("Employee Record Deleted!!!");
  }
}
