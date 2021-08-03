import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {DescriptionCityService} from '../description-city.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm! : FormGroup;
  cityData:any = [];
  constructor(private _fb : FormBuilder, private _cityService : DescriptionCityService) { }

  ngOnInit(): void {

   
      this.employeeForm = this._fb.group({
        itemRows : this._fb.array([this.initFormItems()])
    });
    
    


    this._cityService.getCityData()
      .subscribe(data =>{
      console.log(data);
      this.cityData = data;
    });

  }

  get FormArrayData(){
    return this.employeeForm.get('itemRows') as FormArray;
  }

  get f(){
    return this.employeeForm.controls;
  }
  
  onAddRows(){
    return this.FormArrayData.push(this.initFormItems());
  }

  deleteRow(index: number){
    this.FormArrayData.removeAt(index);
    this.onSubmit(); 
  }

  onSubmit(){
    console.log(this.employeeForm.value.itemRows);
    let previousData: any;
    if(localStorage.getItem("employeeData")!= null){
      previousData = localStorage.getItem("employeeData");
      let parseFinalData = JSON.parse(previousData)
      console.log(previousData)
      let employeeData = this.employeeForm.value.itemRows;
      let finalData = parseFinalData.concat(employeeData);
      console.log(finalData);
      localStorage.setItem("employeeData", JSON.stringify(finalData));
    }else{
      let employeeData = this.employeeForm.value.itemRows;
      localStorage.setItem("employeeData", JSON.stringify(employeeData));
    }

    
  
    
  }

  initFormItems(): FormGroup{
    return this._fb.group({
      firstName: [],
      lastName : [],
      contact: [],
      city: []
    });
  }

}
