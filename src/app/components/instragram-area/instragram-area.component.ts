import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-instragram-area',
  templateUrl: './instragram-area.component.html',
  styleUrls: ['./instragram-area.component.css']
})
export class InstragramAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 6
      }
    },
  }

}
