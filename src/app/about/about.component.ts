import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  description = false;

  ngOnInit() {
  }

  openMore() {
    this.description = !this.description;
  }
}