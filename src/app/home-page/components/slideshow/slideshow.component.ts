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

  private slidesLength: number;
  private translateStep: number;
  private currentTranslatePosition: number;
  private totalSlidesSize: number;
  private firstItem: HTMLElement;
  private lastItem: HTMLElement;
  private counter = 0;
  public selected = 0;
  private intervalStart;
  private subscriptions: Subscription[] = [];
  public buttonsBackAndNext: HTMLElement[];
  public sliderIsHovered = false;

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
    this.firstItem = this.slidesHolder.nativeElement.querySelectorAll('.slide-item')[0];
    this.lastItem = this.slidesHolder.nativeElement.querySelectorAll('.slide-item')[this.slidesLength - 1];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    clearInterval(this.intervalStart);
  }

  private moveSlide(direction: SLIDE_DIRECTION): void {
    this.slidesHolder.nativeElement.style.transition = '';
    // default values, that matches LEFT direction to reduce code
    let counter = 0;
    let translatePostion = this.translateStep;
    let step = this.currentTranslatePosition + this.translateStep;
    let commonCounterAction = 'dec';
    let itemToMove = this.lastItem;
    let itemToMovePosition = -this.totalSlidesSize;
    let counterAction = this.slidesLength - 1;

    if (direction === SLIDE_DIRECTION.RIGHT) {
      counter = this.slidesLength - 1;
      translatePostion = -this.translateStep;
      step = -100;
      commonCounterAction = 'inc';
      itemToMove = this.firstItem;
      itemToMovePosition = this.totalSlidesSize;
      counterAction = 0;
    }

    if (this.counter === counter) {
      this.handleLastAndFirstMoves(step, itemToMove, itemToMovePosition, counterAction);
    } else {
      this.commonSlidesMove(translatePostion, commonCounterAction);
    }

    this.selected = this.counter;
  }

  private handleClick(arr) {
    this.subscriptions = arr.map(({ el, callback }) => {
      const stream = fromEvent(el, 'click');
      return stream.pipe(throttleTime(400)).subscribe(callback);
    });
  }

  private translateItem(item, step: number): void {
    if (item.nativeElement) {
      item.nativeElement.style.transform = `translate(${step}%)`;
    } else {
      item.style.transform = `translate(${step}%)`;
    }
  }

  private moveContainerAndItem(itemToMove: HTMLElement, direction): void {
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

  private handleLastAndFirstMoves(changeSlidesPos, itemToMove, positionToMove, counterAction): void {
    this.currentTranslatePosition = changeSlidesPos;
    this.moveContainerAndItem(itemToMove, positionToMove);
    this.slidesHolder.nativeElement.addEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
    this.counter = counterAction;
  }

  private commonSlidesMove(translatePostion, counterAction): void {
    this.currentTranslatePosition += translatePostion;
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
    counterAction === 'inc' ? this.counter++ : this.counter--;
  }

  public bulletHandler(i: number): void {
    this.slidesHolder.nativeElement.style.transition = '';
    this.counter = i;
    this.selected = this.counter;
    this.currentTranslatePosition = i * -this.translateStep;
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
  }

  public stopSlideshow(): void {
    this.continueSlideshow = () => null;
    this.pauseSlideshow = () => null;
  }

  public pauseSlideshow(): void {
    this.sliderIsHovered = true;
    clearInterval(this.intervalStart);
  }

  public continueSlideshow(): void {
    this.sliderIsHovered = false;
    this.intervalStart = setInterval(() => {
      this.moveSlide(SLIDE_DIRECTION.RIGHT);
    }, 4000);
  }
}



