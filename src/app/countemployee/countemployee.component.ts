import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countemployee',
  templateUrl: './countemployee.component.html',
  styleUrls: ['./countemployee.component.scss']
})
export class CountemployeeComponent implements OnInit , OnChanges {

  @Input() data:any;
  @Output() outputMsg:any = new EventEmitter();
  empId: any = 0;

  constructor() { }

  ngOnChanges() {
    // this.outputMsg.emit("employee no. :"+this.data);
    // this.outputMsg.emit(this.uniqueId(0,100));
    // this.outputMsg.emit(this.data);

    if (this.data>0) {
      this.empId++;
      this.outputMsg.emit(this.empId);
    }
  }

  ngOnInit(): void {
  }

  // uniqueId(min: number , max: number) {
  //   return Math.floor(Math.random()* max - min + 1)+min;
  // }
}
