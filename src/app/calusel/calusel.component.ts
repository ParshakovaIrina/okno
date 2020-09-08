import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calusel',
  templateUrl: './calusel.component.html',
  styleUrls: ['./calusel.component.less']
})
export class CaluselComponent implements OnInit {
  @Input() slides;
  @Input() counter;
 // slide = this.slides[this.counter];
slide;
  constructor() {
  }

  ngOnInit() {
    this.slide = this.slides[this.counter];
  }

  nextSlide(move: string) {
    if (move === 'next') {
      if (this.counter === this.slides.length - 1) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    } else {
      if (this.counter === 0) {
        this.counter = this.slides.length - 1;
      } else {
        this.counter--;
      }
    }
    this.slide = this.slides[this.counter];
  }
}
