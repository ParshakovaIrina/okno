import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {
  counter = 0;
  slides = [
    {
      id: 1, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 1'
    },
    {
      id: 2, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 2'
    },
    {
      id: 3, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 3'
    },
    {
      id: 4, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 4'
    },
    {
      id: 5, image: '../../assets/ reviews/Снимок6.PNG',
      caption: 'Slide 5'
    },
    {
      id: 6, image: '../../assets/ reviews/Снимок5.PNG',
      caption: 'Slide 6'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
