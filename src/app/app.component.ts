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
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      
    })
  }


  Country: any = [
    { id: 1, name: "India"},
    { id: 2, name: "USA" },
    { id: 3, name: "China" },
    { id: 4, name: "Germany" },
    { id: 5, name: "Italy" },
    { id: 6, name: "Japan" },
    { id: 7, name: "Nepal" },
    { id: 8, name: "Pakistan" },
  ]



  State: any = [
    { id: 1, name: "West Bengal", country:1 },
    { id: 2, name: "Tamil Nadu", country:1 },
    { id: 3, name: "Karnataka", country:1 },
    { id: 4, name: "Assam", country:1 },
    { id: 5, name: "Bihar", country:1 },

    { id: 6, name: "Alabama", country:2 },
    { id: 7, name: "Alaska", country:2 },
    { id: 8, name: "Arizona", country:2 },
    { id: 9, name: "California", country:2 },
    { id: 10, name: "Colorado", country:2 },

    { id: 11, name: "Qinghai", country:3 },
    { id: 12, name: "Sichuan", country:3 },
    { id: 13, name: "Gansu", country:3 },
    { id: 14, name: "Heilongjiang", country:3 },
    { id: 15, name: "Yunnan", country:3 },

    { id: 16, name: "Baden-Württemberg", country:4 },
    { id: 17, name: "Bavaria", country:4 },
    { id: 18, name: "Berlin", country:4 },
    { id: 19, name: "Brandenburg", country:4 },
    { id: 20, name: "Hamburg", country:4 },

    { id: 21, name: "Abruzzi", country:5 },
    { id: 22, name: "Basilicata", country:5 },
    { id: 23, name: "Calabria", country:5 },
    { id: 24, name: "Emilia-Romagna", country:5 },
    { id: 25, name: "Lazio", country:5 },

    { id: 26, name: "Aichi", country:6 },
    { id: 27, name: "Akita", country:6 },
    { id: 28, name: "Aomori", country:6 },
    { id: 29, name: "Chiba", country:6 },
    { id: 30, name: "Ehime", country:6 },

    { id: 31, name: "Madhesh", country:7 },
    { id: 32, name: "Bagmati", country:7 },
    { id: 33, name: "Gandaki", country:7 },
    { id: 34, name: "Lumbini", country:7 },
    { id: 35, name: "Karnali", country:7 },

    { id: 36, name: "Gilgit-Baltistan", country:8 },
    { id: 37, name: "Azad Kashmir", country:8 },
    { id: 38, name: "Punjab", country:8 },
    { id: 39, name: "Balochistan ", country:8 },
    { id: 40, name: "Sind ", country:8 },

  ]

  City: any = [
    { id: 1, name: "Kolkata", state: 1 },
    { id: 2, name: "Asansol", state: 1 },
    { id: 3, name: "Durgapur", state: 1 },
    { id: 4, name: "Chennai", state: 2 },
    { id: 5, name: "pondicherry", state: 2 },
    { id: 6, name: "Madhurai", state: 2 },
    { id: 7, name: "Bengaluru", state: 3 },
    { id: 8, name: "Mysore", state: 3 },
    { id: 9, name: "Kolar", state: 3 },
    { id: 10, name: "Guwahati", state: 4 },
    { id: 11, name: "Silchar", state: 4 },
    { id: 12, name: "Dibrugarh", state: 4 },
    { id: 13, name: "Patna", state: 5 },
    { id: 14, name: "Gaya", state: 5 },
    { id: 15, name: "Bhagalpur", state: 5 },
    { id: 16, name: "Huntsville ", state: 6 },
    { id: 17, name: "Montgomery ", state: 6 },
    { id: 18, name: "Birmingham ", state: 6 },
    { id: 19, name: "Anchorage ", state: 7 },
    { id: 20, name: "Fairbanks ", state: 7 },
    { id: 21, name: "Meadow Lakes", state: 7 },
    { id: 22, name: "Phoenix", state: 8 },
    { id: 23, name: "Scottsdale", state: 8 },
    { id: 24, name: "Tucson", state: 8 },
    { id: 25, name: "Los Angeles", state: 9 },
    { id: 26, name: "San Diego", state: 9 },
    { id: 27, name: "San Jose", state: 9 },
    { id: 28, name: "Denver", state: 10 },
    { id: 29, name: "Aurora", state: 10 },
    { id: 30, name: "Lakewood", state: 10 },
    { id: 31, name: "Xining", state: 11 },
    { id: 32, name: "Golmud", state: 11 },
    { id: 33, name: "Wulan", state: 11 },
  ]


  dropdownState: any = this.State;
  dropdownCity: any = this.City;

  populateState(count: any){
    if(this.userForm.controls.country.value.id == 'Select Country'){
      this.dropdownState = this.State;
    }else{
      this.dropdownState = this.State.filter((i: { country: any; }) => i.country == this.userForm.controls.country.value.id);
    }
  }

  populateCity(value: any) {
    if(this.userForm.controls.state.value.id == 'Select State'){
      this.dropdownCity = this.City;
    }
    else{
      this.dropdownCity = this.City.filter((i: { state: any; }) => i.state == this.userForm.controls.state.value.id);
    }
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

