import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit, AfterContentInit {
  public itemsPerPage;
  public styleForContainer;
  public itemWidth;
  private currTranslate = 0;
  private childrenLength: number;

  @ViewChild('slidesContainer') slidesContainer: ElementRef;

  sizeHandler() {
    if (innerWidth <= 424) {
      this.itemWidth = '1000%';
      this.itemsPerPage = 1;
    } else if (innerWidth <= 768) {
      this.itemWidth = '500%';
      this.itemsPerPage = 2;
    } else if (innerWidth <= 1024) {
      this.itemWidth = '333.333333%';
      this.itemsPerPage = 3;
    } else {
      this.itemWidth = '250%';
      this.itemsPerPage = 4;
    }
  }

  ngOnInit(): void {
    this.sizeHandler();
    const event = fromEvent(window, 'resize').subscribe(evt => {
      this.sizeHandler();
    });
  }

  ngAfterContentInit(): void {
    this.childrenLength = document.querySelectorAll('.carousel-item-wrap').length;
  }

  public nextSlide(): void {
    const sliderLength: number = (-this.childrenLength / this.itemsPerPage) * (100 / this.childrenLength * (this.itemsPerPage - 1));
    if (sliderLength < this.currTranslate) {
      this.moveSlides(-100 / this.childrenLength * this.itemsPerPage) ;
    }
  }

  public prevSlide(): void {
    if (this.currTranslate) {
      this.moveSlides(100 / this.childrenLength * this.itemsPerPage);
    }
  }

  private moveSlides(direction: number): void {
    this.currTranslate += direction;
    this.slidesContainer.nativeElement.style.transform = `translate(${this.currTranslate}%)`;
  }
}
