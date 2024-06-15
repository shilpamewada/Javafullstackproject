import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;
  cartItems: any;
  loginStatus: any;
  
  constructor(private http: HttpClient) {
    this.cartItems = [];
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
  }

  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
  }
  getIsUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
  getUserLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  addToCart(product: any) {
    this.cartItems.push(product);
  }
  purchase() {
    this.cartItems = [];
  }

  getAllEmployees(): any {
    return this.http.get('http://localhost:8085/getAllEmployees');
  }
  getEmpById(empId: any): any {
    return this.http.get('http://localhost:8085/getEmployeeById/' + empId);
  }
  getAllDepartments(): any {
    return this.http.get('http://localhost:8085/getAllDepartments');
  }
  registerEmployee(employee: any): any {
    return this.http.post('http://localhost:8085/addEmployee', employee);
  }
  empLogin2(loginForm: any): any {
    return this.http.get('http://localhost:8085/empLogin2/' + loginForm.emailId + "/" + loginForm.password).toPromise();
  }
  empLogin3(loginForm: any): any {
    return this.http.post('http://localhost:8085/empLogin3', loginForm).toPromise();
  }
  getAllProducts(): any {
    return this.http.get('http://localhost:8085/getAllProducts');
  }
  deleteEmployee(empId: any): any {
    return this.http.delete('http://localhost:8085/deleteEmployeeById/' + empId);
  }  
  updateEmployee(employee: any): any {
    return this.http.put('http://localhost:8085/updateEmployee', employee);
  }


 

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
