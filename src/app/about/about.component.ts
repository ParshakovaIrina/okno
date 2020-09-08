import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  slides = [
    {
      id: 0, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 1'
    },
    {
      id: 1, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 2'
    },
    {
      id: 2, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 3'
    },
    {
      id: 3, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 4'
    },
    {
      id: 4, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 5'
    },
    {
      id: 5, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 6'
    }
  ];
  constructor() {
  }

  description = false;

  ngOnInit() {
  }

  openMore() {
    this.description = !this.description;
  }
}
