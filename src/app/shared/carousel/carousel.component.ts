import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild('allSlidesContainer') allSlides: ElementRef;


  constructor() { }

  currTranslate = 0;
  childrenLength;

  ngAfterContentInit() {
    this.childrenLength = this.allSlides.nativeElement.children.length;
  }
  ngOnInit() {
    this.allSlides.nativeElement.style.transform = `translate(${0}%)`;
  }

  nextSlide() {
    let sliderLengthCheck = (-this.childrenLength / 4 + 1) * 100;
    if( sliderLengthCheck < this.currTranslate) {
      this.currTranslate -= 100;
      this.allSlides.nativeElement.style.transform = `translate(${this.currTranslate}%)`;
    }
  }
  prevSlide() {
    if(this.currTranslate) {
      this.currTranslate += 100;
      this.allSlides.nativeElement.style.transform = `translate(${this.currTranslate}%)`;
    }
  }
}
