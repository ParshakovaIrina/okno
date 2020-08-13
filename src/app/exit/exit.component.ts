import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.less']
})
export class ExitComponent implements OnInit {
  more = true;

  constructor() {
  }

  ngOnInit() {
  }

  MoreImg() {
    this.more = !this.more;
  }
}
