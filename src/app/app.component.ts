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
  displayCity: boolean = true;
  value: number = 0;
  count: number = 0;
  proWidth: string = "10%";


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

    this.dropdownCountry = this.Country;
    this.dropdownCity = this.City;
    this.dropdownState = this.State;


    this.userForm.controls.country.valueChanges.subscribe((val : any)=>{
      if(this.dropdownCountry.length == 1){
        this.userForm.controls.country.setValue(this.dropdownCountry[0],{emitEvent: false});
        this.dropdownState = this.State.filter((i: any) => i.country == this.dropdownCountry[0].id);
        return;
      }
      if (val.id == 'Select Country') {
        this.dropdownState = this.State;
      }
      else {
        this.dropdownState = this.State.filter((i: any) => i.country == val.id);
      }
    });



    this.userForm.controls.state.valueChanges.subscribe((val : any)=>{
      if(this.dropdownState.length == 1){
        this.userForm.controls.state.setValue(this.dropdownState[0],{emitEvent: false});
        this.dropdownCity = this.City.filter((i: { state:any}) => i.state == this.dropdownState[0].id);
        this.dropdownCountry = this.Country.filter((i: any) => i.id == this.dropdownState[0].country);
        this.userForm.controls.country.setValue('');
        return;
      }
      if (val.id == 'Select State') {
        this.dropdownCity = this.City;
      }
      else {
        this.dropdownCity = this.City.filter((i: { state:any}) => i.state == val.id);
      }
    });

    
    
    this.userForm.controls.city.valueChanges.subscribe((val : any)=>{
      if(this.dropdownCity.length == 1){
        this.userForm.controls.city.setValue(this.dropdownCity[0],{emitEvent:false});
      }
      if (val.State == 'Select State') {
        
      }
      else {
        this.dropdownState = this.State.filter((i: any) => i.id == val.state);
        this.userForm.controls.state.setValue('');
      }
    });
  }

  Country: any = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "China" },
    { id: 4, name: "Germany" },
    { id: 5, name: "Italy" },
    { id: 6, name: "Japan" },
    { id: 7, name: "Nepal" },
    { id: 8, name: "Pakistan" },
  ]



  State: any = [
    { id: 1, name: "West Bengal", country: 1 },
    { id: 2, name: "Tamil Nadu", country: 1 },
    { id: 3, name: "Karnataka", country: 1 },
    { id: 4, name: "Assam", country: 1 },
    { id: 5, name: "Bihar", country: 1 },

    { id: 6, name: "Alabama", country: 2 },
    { id: 7, name: "Alaska", country: 2 },
    { id: 8, name: "Arizona", country: 2 },
    { id: 9, name: "California", country: 2 },
    { id: 10, name: "Colorado", country: 2 },

    { id: 11, name: "Qinghai", country: 3 },

    { id: 12, name: "Baden-Württemberg", country: 4 },

    { id: 13, name: "Abruzzi", country: 5 },

    { id: 14, name: "Aichi", country: 6 },

    { id: 15, name: "Madhesh", country: 7 },

    { id: 16, name: "Gilgit-Baltistan", country: 8 },

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
    { id: 33, name: "Feldberg", state: 12 },
    { id: 33, name: "Breitnau", state: 12 },
    { id: 33, name: "Wutach", state: 12 },
    { id: 33, name: "Abbateggio", state: 13 },
    { id: 33, name: "Pescocostanzo", state: 13 },
    { id: 33, name: "Tagliacozzo", state: 13 },
    { id: 33, name: "Nagoya", state: 14 },
    { id: 33, name: "Okazaki", state: 14 },
    { id: 33, name: "Kasugai", state: 14 },
    { id: 33, name: "Banepa", state: 15 },
    { id: 33, name: "Bhaktapur ", state: 15 },
    { id: 33, name: "Bharatpur", state: 15 },
    { id: 33, name: "Gahkuch", state: 16 },
    { id: 33, name: "Gilgit", state: 16 },
    { id: 33, name: "Gojal", state: 16 },
  ]

  dropdownCountry: any = [];
  dropdownState: any = [];
  dropdownCity: any = [];

  // populateState(value: any) {
  //   if (this.userForm.controls.country.value.id == 'Select Country') {
  //     this.dropdownState = this.State;
  //   }
  //   else {
  //     this.dropdownCity = this.City;
  //     this.dropdownState = this.State.filter((i: { country: any; }) => i.country == this.userForm.controls.country.value.id);
  //     this.displayCity = true;
  //   }
  // }

  // populateCity(value: any) {
  //   if (this.userForm.controls.state.value.id == 'Select State') {
  //     this.dropdownCity = this.City;
  //   }
  //   else {
  //     this.dropdownCity = this.City.filter((i: { state: any; }) => i.state == this.userForm.controls.state.value.id);
  //     this.displayCity = true;
  //   }
  // }

  // forCountry(e: any) {
  //   this.displayCountry = false;
  //   this.dropdownCountry = this.Country.filter((i: { id: any; }) => i.id == this.userForm.controls.state.value.country);
  // }

  // forState(e: any) {
  //   this.displayState = false;
  //   // console.log("HII");
  //   this.dropdownState = this.State.filter((i: { id: any; }) => i.id == this.userForm.controls.city.value.state);

  // }





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
        this.displayCity = true;
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

  delete(index: any) {
    this.listData.splice(index, 1);
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

  progressBar() {
    this.count = 0; 
    Object.values(this.userForm.controls).forEach((i:any)=>{if(!i.errors) this.count++;})
    this.proWidth = (this.count /16 * 100)  + '%';
  }

  uniqueId(event: any) {
    console.log(event);

    if (this.listData.length > 0) {
      this.listData[this.listData.length - 1].empid = event;

    }
  }
}

