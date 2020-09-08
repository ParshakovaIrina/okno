import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-more',
  templateUrl: './about-more.component.html',
  styleUrls: ['./about-more.component.less']
})
export class AboutMoreComponent implements OnInit {
  i = 0;
  slides = [
    {
      id: 1, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/892247_orig.jpg',
      caption: 'Slide 1'
    },
    {
      id: 2, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/6434454_orig.jpg',
      caption: 'Slide 2'
    },
    {
      id: 3, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/2439055_orig.jpg',
      caption: 'Slide 3'
    },
    {
      id: 4, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/8847251_orig.png',
      caption: 'Slide 4'
    },
    {
      id: 5, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/9526318.jpg',
      caption: 'Slide 5'
    },
    {
      id: 6, image: 'http://yahoop88.weebly.com/uploads/1/3/9/0/13908104/9994432.jpg',
      caption: 'Slide 6'
    }
  ];
  paint;
  constructor() { }

  ngOnInit() {
  }
  nextSlide(move: string) {
    if (move === 'next') {
      if (this.i === this.slides.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
      this.paint = this.slides[this.i];
    } else {
      if (this.i === 0) {
        this.i = this.slides.length - 1;
      } else {
        this.i--;
      }
      this.paint = this.slides[this.i];
    }
  }
}
