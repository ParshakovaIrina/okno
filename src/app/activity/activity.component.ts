import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less']
})
export class ActivityComponent implements OnInit {

  gallery = false;
  slides = [
    {
      id: 1, image: '../../assets/wafest/9YRoDMdFePo.jpg',
      caption: 'Slide 1'
    },
    {
      id: 2, image: '../../assets/wafest/eDnM6RTn-9s.jpg',
      caption: 'Slide 2'
    },
    {
      id: 3, image: '../../assets/wafest/VxevkAxmjok.jpg',
      caption: 'Slide 3'
    },
    {
      id: 4, image: '../../assets/wafest/oNQwgzXV8DA.jpg',
      caption: 'Slide 4'
    },
    {
      id: 5, image: '../../assets/wafest/MmYgb87o9OU.jpg',
      caption: 'Slide 5'
    },
    {
      id: 6, image: '../../assets/wafest/i5LGlEyHtug.jpg',
      caption: 'Slide 6'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  showGallery() {
    this.gallery = !this.gallery;
  }
}
