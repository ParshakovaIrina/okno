import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})

export class MenuComponent implements OnInit {
  showMainPage;
  numberContent = 1;

  constructor() {
  }

  ngOnInit() {
  }

  changeContent(num: number) {
    this.numberContent = num;
   // this.showMainPage = document.getElementsByClassName('menu-text');
   // this.showMainPage.style.fontWeight.bold();
  }
}
