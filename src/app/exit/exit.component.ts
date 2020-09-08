import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.less']
})
export class ExitComponent implements OnInit {
  more = true;
  counter = 0;
  gallery = false;
  slides = [
    {
      id: 0, image: '../../assets/exit/3aXZkPShhT4.jpg',
      caption: 'Slide 1'
    },
    {
      id: 1, image: '../../assets/exit/yKhAZ-TYQBk.jpg',
      caption: 'Slide 1'
    },
    {
      id: 2, image: '../../assets/exit/v94lLAEVPN0.jpg',
      caption: 'Slide 2'
    },
    {
      id: 3, image: '../../assets/exit/V1rDmiDkSoI.jpg',
      caption: 'Slide 3'
    },
    {
      id: 4, image: '../../assets/exit/RBTMG2TA1Q4.jpg',
      caption: 'Slide 4'
    },
    {
      id: 5, image: '../../assets/exit/lrEZnt-QzDM.jpg',
      caption: 'Slide 5'
    },
    {
      id: 6, image: '../../assets/exit/J1-NUljv2nU.jpg',
      caption: 'Slide 6'
    },
    {
      id: 7, image: '../../assets/exit/hM78UHjTdHs.jpg',
      caption: 'Slide 7'
    },
    {
      id: 8, image: '../../assets/exit/hHqjoNAVqQ8.jpg',
      caption: 'Slide 7'
    },
    {
      id: 9, image: '../../assets/exit/Gu_e0l_eZ_g.jpg',
      caption: 'Slide 7'
    },
    {
      id: 10, image: '../../assets/exit/GBBDJQG3T18.jpg',
      caption: 'Slide 7'
    },
    {
      id: 11, image: '../../assets/exit/DLDmglWpm-0.jpg',
      caption: 'Slide 7'
    },
    {
      id: 12, image: '../../assets/exit/bp1hp-nrZ7U.jpg',
      caption: 'Slide 7'
    },
    {
      id: 13, image: '../../assets/exit/_nAq2DIwgzg.jpg',
      caption: 'Slide 7'
    },
    {
      id: 14, image: '../../assets/exit/-fnN0beCR40.jpg',
      caption: 'Slide 7'
    },
    {
      id: 15, image: '../../assets/exit/5-fbatDOWaQ.jpg',
      caption: 'Slide 7'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  MoreImg() {
    this.more = !this.more;
  }

  showGallery() {
    this.gallery = !this.gallery;
  }

}
