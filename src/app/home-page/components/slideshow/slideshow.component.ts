import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

enum SLIDE_DIRECTION {
  RIGHT = 1,
  LEFT = 0
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('slidesHolder') slidesHolder: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('back') back: ElementRef;

  responseImgs: any[] = [
    'https://myupdateweb.com/wp-content/uploads/2017/07/Bluehost.com_-1-1540x650.png',
    'http://forgedground.com/image/cache/catalog/Slideshow/forged-ground-featured-official-merch-es-1540x650.jpg',
    'http://forgedground.com/image/cache/catalog/viking-medieval-escudos-cascos-cuernos-espadass-accesorios-forgedground-1540x650.jpg',
    'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main1-1540x650.jpg',
    'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main2-1540x650.jpg'
  ];

  public isHovered = false;
  public selected = 0;
  public isStoped = false;
  private slidesLength: number;
  private translateStep: number;
  private currentTranslatePosition: number;
  private totalSlidesSize: number;
  private firstItem: HTMLElement;
  private lastItem: HTMLElement;
  private counter = 0;
  private intervalStart;
  private subscriptions: Subscription[] = [];

  constructor() {
    this.moveToEdgeSlideWithoutRewind = this.moveToEdgeSlideWithoutRewind.bind(
      this
    );
  }

  ngOnInit(): void {
    this.slidesLength = this.responseImgs.length;
    this.totalSlidesSize = this.slidesLength * 100;
    this.slidesHolder.nativeElement.style.width = this.totalSlidesSize + '%';
    this.translateStep = 100 / this.slidesLength;
    this.currentTranslatePosition = 0;
    this.intervalStart = setInterval(() => {
      this.moveSlide(SLIDE_DIRECTION.RIGHT);
    }, 4000);
  }

  ngAfterViewInit(): void {
    this.handleClick([
      {
        el: this.next.nativeElement,
        callback: () => this.moveSlide(SLIDE_DIRECTION.RIGHT)
      },
      {
        el: this.back.nativeElement,
        callback: () => this.moveSlide(SLIDE_DIRECTION.LEFT)
      }
    ]);
    this.firstItem = this.slidesHolder.nativeElement.querySelector('.slide-item:first-child');
    this.lastItem = this.slidesHolder.nativeElement.querySelector('.slide-item:last-child');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    clearInterval(this.intervalStart);
  }

  public moveSlide(direction: SLIDE_DIRECTION): void {
    this.slidesHolder.nativeElement.style.transition = '';
    let counter = 0;
    let translatePostion = this.translateStep;
    let step = this.currentTranslatePosition + this.translateStep;
    let itemToMove = this.lastItem;
    let itemToMovePosition = -this.totalSlidesSize;
    let counterValue = this.slidesLength - 1;

    if (direction === SLIDE_DIRECTION.RIGHT) {
      counter = this.slidesLength - 1;
      translatePostion = -this.translateStep;
      step = -100;
      itemToMove = this.firstItem;
      itemToMovePosition = this.totalSlidesSize;
      counterValue = 0;
    }

    if (this.counter === counter) {
      this.moveEdgeSlides(step, itemToMove, itemToMovePosition, counterValue);
    } else {
      this.moveSlides(translatePostion, counterValue);
    }

    this.selected = this.counter;
  }

  private handleClick(arr, time = 400) {
    this.subscriptions = arr.map(({ el, callback }) => {
      const stream = fromEvent(el, 'click');
      return stream.pipe(throttleTime(time)).subscribe(callback);
    });
  }

  private translateItem(item, step: number): void {
    const { nativeElement } = item;
    if (nativeElement) {
      nativeElement.style.transform = `translate(${step}%)`;
      return;
    }
    item.style.transform = `translate(${step}%)`;
  }

  private moveContainerAndItem(itemToMove: HTMLElement, direction: number): void {
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
    this.translateItem(itemToMove, direction);
  }

  private moveToEdgeSlideWithoutRewind(): void {
    this.slidesHolder.nativeElement.style.transition = 'none';
    let itemToMove;
    let containerMoveDirection = 0;
    let itemMoveDirection = 0;
    let changeTranslatePosition = 0;

    if (this.counter === 0) {
      itemToMove = this.firstItem;
    } else {
      itemToMove = this.lastItem;
      containerMoveDirection = this.translateStep - 100;
      changeTranslatePosition = -100 + this.translateStep;
      itemMoveDirection = 0;
    }

    this.translateItem(this.slidesHolder, containerMoveDirection);
    this.translateItem(itemToMove, itemMoveDirection);
    this.currentTranslatePosition = changeTranslatePosition;

    this.slidesHolder.nativeElement.removeEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
  }

  private moveEdgeSlides(changeSlidesPos: number, itemToMove: HTMLElement, positionToMove: number, counterValue: number): void {
    this.currentTranslatePosition = changeSlidesPos;
    this.moveContainerAndItem(itemToMove, positionToMove);
    this.slidesHolder.nativeElement.addEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
    this.counter = counterValue;
  }

  private moveSlides(translatePostion: number, counterValue: number): void {
    this.currentTranslatePosition += translatePostion;
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
    counterValue ? this.counter-- : this.counter++;
  }

  public bulletHandler(i: number): void {
    this.slidesHolder.nativeElement.style.transition = '';
    this.counter = i;
    this.selected = this.counter;
    this.currentTranslatePosition = i * -this.translateStep;
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
  }

  public stop(): void {
    this.isStoped = true;
  }

  public pause(): void {
    if (!this.isStoped) {
      this.isHovered = true;
      clearInterval(this.intervalStart);
    }
  }

  public continue(): void {
    if (!this.isStoped) {
      this.isHovered = false;
      this.intervalStart = setInterval(() => {
        this.moveSlide(SLIDE_DIRECTION.RIGHT);
      }, 4000);
    }
  }
}
