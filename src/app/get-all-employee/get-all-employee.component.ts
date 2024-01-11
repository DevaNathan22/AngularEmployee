import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-all-employee',
  templateUrl: './get-all-employee.component.html',
  styleUrl: './get-all-employee.component.css'
})

export class GetAllEmployeeComponent implements OnInit  {
  employee:Employee[]=[];
  constructor(private http:HttpClient){}
    ngOnInit() {
      this.getEmployeeDetails().subscribe(x=>this.employee=x);
    }
    getEmployeeDetails() {
      return this.http.get<Employee[]>("http://localhost:8080/val4");
    }
}
class Employee {
  id?:number;
	name?:string;
	gender?:string;
	contactNo?:number;
	salary?:number;
	empId?:number;
	shift?:string;
	designation?:string;
	email?:string;
}

