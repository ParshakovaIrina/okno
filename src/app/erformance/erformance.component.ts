import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erformance',
  templateUrl: './erformance.component.html',
  styleUrls: ['./erformance.component.less']
})
export class ErformanceComponent implements OnInit {

  constructor() { }
  numberContent :number;
  ngOnInit() {
  }
  changeContent(num: number) {
    this.numberContent = num;
  }
}
