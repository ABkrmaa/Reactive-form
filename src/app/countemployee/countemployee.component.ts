import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countemployee',
  templateUrl: './countemployee.component.html',
  styleUrls: ['./countemployee.component.scss']
})
export class CountemployeeComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
