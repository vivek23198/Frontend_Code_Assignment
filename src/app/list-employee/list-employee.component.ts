import { Component, OnInit } from '@angular/core';
import {employee} from '../employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  EmployeeData:employee[] = [];
  EmployeeDataList:any;
  constructor() { }

  ngOnInit() {

   this.getEmployeeData()
  }


  getEmployeeData(){
    console.log(localStorage.getItem('employeeData'));
    this.EmployeeDataList = localStorage.getItem('employeeData');

    this.EmployeeDataList = JSON.parse(this.EmployeeDataList);
   
    
    
    console.log(this.EmployeeDataList);
    console.log(this.EmployeeData);
  }

}
