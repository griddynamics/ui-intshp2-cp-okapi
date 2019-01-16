import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  private itemsPerPage;
  private resizeEvent: Subscription;
  private currTranslate = 0;
  private childrenLength: number;
  private counterScrolledItems: number;

  @ViewChild('slidesContainer') slidesContainer: ElementRef;

  ngOnInit(): void {
    this.resizeEvent = fromEvent(window, 'resize')
      .pipe(debounceTime(400))
      .subscribe(evt => {
        this.handleResize();
        this.slidesContainer.nativeElement.style.transition = 'none';
        this.slidesContainer.nativeElement.style.transform = 'translate(0%)';
        this.counterScrolledItems = this.itemsPerPage;
        this.currTranslate = 0;
      });
  }

  ngAfterViewInit() {
    this.childrenLength = document.querySelectorAll('.carousel-item-wrap').length;
    const slidesContainerWidth = this.slidesContainer.nativeElement.offsetWidth;
    const slideItemWidth = this.slidesContainer.nativeElement.children[0].offsetWidth;
    this.itemsPerPage = Math.round(slidesContainerWidth / slideItemWidth);
    this.counterScrolledItems = this.itemsPerPage;
  }

  ngOnDestroy(): void {
    if (this.resizeEvent) {
      this.resizeEvent.unsubscribe();
    }
  }

  public nextSlide(): void {
    if (this.counterScrolledItems <= this.childrenLength) {
      this.counterScrolledItems += this.itemsPerPage;
      this.slidesMover(-100);
    }
  }

  public prevSlide(): void {
    if (this.counterScrolledItems > this.itemsPerPage) {
      this.counterScrolledItems -= this.itemsPerPage;
      this.slidesMover(100);
    }
  }

  private slidesMover(translateStep: number): void {
    this.slidesContainer.nativeElement.style.transition = '';
    this.currTranslate += translateStep;
    this.slidesContainer.nativeElement.style.transform = `translate(${this.currTranslate}%)`;
  }

  private handleResize(): void {
    const slidesContainerWidth = this.slidesContainer.nativeElement.offsetWidth;
    const slideItemWidth = this.slidesContainer.nativeElement.children[0].offsetWidth;
    this.itemsPerPage = Math.round(slidesContainerWidth / slideItemWidth);
  }
}
