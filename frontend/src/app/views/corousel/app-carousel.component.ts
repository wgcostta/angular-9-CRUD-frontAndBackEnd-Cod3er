import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.css']
})
export class AppCarouselComponent implements OnInit {

  public slidesList = new Array<never>(5);
  public slides = this.slidesList.length;
  constructor() { }

  ngOnInit(): void {
  }

}
