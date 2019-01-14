import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  private currTranslate = 0;
  private childrenLength: number;

  @ViewChild('slidesContainer') slidesContainer: ElementRef;

  ngOnInit(): void {
    this.slidesContainer.nativeElement.style.transform = `translate(${0}%)`;
  }

  ngAfterContentInit(): void {
    this.childrenLength = this.slidesContainer.nativeElement.children.length;
  }

  public nextSlide(): void {
    const sliderLengthCheck: number = (-this.childrenLength / 4 + 1) * 100;
    if (sliderLengthCheck < this.currTranslate) {
      this.slidesMover(-100);
    }
  }

  public prevSlide(): void {
    if (this.currTranslate) {
      this.slidesMover(100);
    }
  }

  private slidesMover(direction: number): void {
    this.currTranslate += direction;
    this.slidesContainer.nativeElement.style.transform = `translate(${this.currTranslate}%)`;
  }
}
