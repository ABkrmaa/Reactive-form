import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-form';
  listData: any;
  userForm: any;
  item: any;
  show: boolean = false;
  submitted: boolean = false;
  submittedIndex: number = 0;
  countEmployee: number = 0;
  idEmployee: number = 0;

  constructor(private fB: FormBuilder) {
    this.listData = [];

    this.userForm = this.fB.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      collage: ['', Validators.required],
      branch: ['', Validators.required],
      yop: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      cgpa: ['', [Validators.required, Validators.pattern("[0-9.]*")]],
      degree: ['', Validators.required],
    })
  }

  countryList: Array<any> = [
    {country: 'India', states: ['West Bengal', 'karnataka', 'delhi' , 'Chennai']},
    { country: 'Spain', states: ['Barcelona'] },
    { country: 'USA', states: ['Downers Grove']},
    { country: 'Mexico', states: ['Puebla'] },
    { country: 'China', states: ['Beijing'] },
  ];

  states: Array<any> = [];
  
  changeCountry(count: any) {
    this.states = this.countryList.find(con => con.name == count).states;
  }

  add(): void {
    this.submitted = true;
    if (this.userForm.value.name != "" && this.userForm.value.email != "") {
      let isUserExists = this.chkUserExists(this.userForm);
      if (isUserExists == true) {
        this.showMessage("User Exists...!")
      }
      else {
        this.listData.push(this.userForm.value);
        console.log(this.listData);
        // this.userForm.reset();
        this.showMessage("Employee added successfully..!");
        this.countEmployee = this.countEmployee + 1;
        this.idEmployee++;
      }

    }
    else { }
  }

  showMessage(msg: string) {
    alert(msg);
  }

  chkUserExists(userForm: any) {
    let regEmployees = this.listData;
    let isUserExists = false;
    for (let i = 0; i < this.listData.length; i++) {
      if (regEmployees[i].name == userForm.value.name || regEmployees[i].email == userForm.value.email) {
        isUserExists = true;
      }
    }
    return isUserExists;
  }

  delete(element: any) {
    this.listData.splice(element, 1);
    this.countEmployee = this.countEmployee - 1;
    if (this.countEmployee > 0) {
      this.submittedIndex = 0;
    }
    else {
      this.submittedIndex = -1;
    }
    this.show = false;
  }

  details(index: number) {
    this.show = true;
    this.submittedIndex = index;
  }

  uniqueId(event: any) {
    console.log(event);

    if (this.listData.length > 0) {
      this.listData[this.listData.length -1].empid = event;

    }
  }
}

