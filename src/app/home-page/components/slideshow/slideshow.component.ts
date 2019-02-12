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
import { KillswitchService } from 'src/app/core/services/killswitch.service';

enum SLIDE_DIRECTION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT'
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
  @ViewChild('bullet') bullet: ElementRef;

  responseImgs: any[] = [
    'assets/img/slideshow/forged-ground-featured-official-merch-es-1540x650.jpg',
    'assets/img/slideshow/viking-medieval-escudos-cascos-cuernos-espadass-accesorios-forgedground-1540x650.jpg',
    'assets/img/slideshow/banner-main1-1540x650.jpg',
    'assets/img/slideshow/banner-main2-1540x650.jpg'
  ];

  public isHovered = false;
  public selectedSlideIndex = 0;
  public isStoped = false;
  public slideshowTransitionEnabled: boolean;
  public slidesLength: number;
  public currentSlideIndex = 0;
  public translateStep: number;
  public currentTranslatePosition: number;
  public totalSlidesSize: number;
  public firstItem: HTMLElement;
  public lastItem: HTMLElement;
  public intervalStart;
  public subscriptions: Subscription[] = [];

  constructor(public killswitchService: KillswitchService) {
    this.moveToEdgeSlideWithoutRewind = this.moveToEdgeSlideWithoutRewind.bind(this);
  }

  ngOnInit(): void {
    this.slidesLength = this.responseImgs.length;
    this.totalSlidesSize = this.slidesLength * 100;
    this.slidesHolder.nativeElement.style.width = this.totalSlidesSize + '%';
    this.translateStep = 100 / this.slidesLength;
    this.currentTranslatePosition = 0;
    this.slideshowTransitionEnabled = this.killswitchService.getKillswitch('slideshowTransitionEnabled');
  }

  ngAfterViewInit(): void {
    this.bindClick([
      {
        el: this.next.nativeElement,
        callback: this.moveSlide.bind(this, SLIDE_DIRECTION.RIGHT)
      },
      {
        el: this.back.nativeElement,
        callback: this.moveSlide.bind(this, SLIDE_DIRECTION.LEFT)
      }
    ]);
    const { nativeElement } = this.slidesHolder;

    this.firstItem = nativeElement.querySelector('.slide-item:first-child');
    this.lastItem = nativeElement.querySelector('.slide-item:last-child');

    this.runAutoplay();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    clearInterval(this.intervalStart);
  }

  public runAutoplay() {
    if (this.intervalStart) {
      clearInterval(this.intervalStart);
    }
    this.intervalStart = setInterval(this.moveSlide.bind(this, SLIDE_DIRECTION.RIGHT), 4000);
  }

  public moveSlide(direction: SLIDE_DIRECTION): void {
    let edgeSlideIndex = 0;
    let translateStep = this.translateStep;
    let edgeSlideTranstionStep = this.currentTranslatePosition + this.translateStep;
    let edgeSlide = this.lastItem;
    let edgeSlideTranslatePosition = -this.totalSlidesSize;

    if (direction === SLIDE_DIRECTION.RIGHT) {
      edgeSlideIndex = this.slidesLength - 1;
      translateStep = -this.translateStep;
      edgeSlideTranstionStep = -100;
      edgeSlide = this.firstItem;
      edgeSlideTranslatePosition = this.totalSlidesSize;
    }
    if (this.currentSlideIndex === edgeSlideIndex) {
      this.currentSlideIndex = !edgeSlideIndex ? this.slidesLength - 1 : 0;

      if (this.slideshowTransitionEnabled) {
        this.moveEdgeSlides(edgeSlideTranstionStep, edgeSlide, edgeSlideTranslatePosition);
      } else {
        this.currentTranslatePosition = edgeSlideIndex ? 0 : -100 + translateStep;
        this.moveSlider(0);
      }
    } else {
      edgeSlideIndex ? this.currentSlideIndex++ : this.currentSlideIndex--;
      this.moveSlider(translateStep);
    }
    this.selectedSlideIndex = this.currentSlideIndex;
  }

  public bulletHandler(i: number): void {
    this.currentSlideIndex = i;
    this.selectedSlideIndex = this.currentSlideIndex;
    this.currentTranslatePosition = i * -this.translateStep;
    this.moveSlider(0);
  }

  public stop(): void {
    this.isStoped = true;
    clearInterval(this.intervalStart);
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
      this.runAutoplay();
    }
  }

  public bindClick(arr, time = 400) {
    this.subscriptions = arr.map(({ el, callback }) => {
      const stream = fromEvent(el, 'click');
      return stream.pipe(throttleTime(time)).subscribe(callback);
    });
  }

  public translate(item: HTMLElement, step: number, animation = true): void {
    item.style.transition = animation ? '' : 'none';
    item.style.transform = `translate(${step}%)`;
  }

  public moveContainerWithEdgeSlide(itemToMove: HTMLElement, translatePostion: number, animation?): void {
    this.translate(this.slidesHolder.nativeElement, this.currentTranslatePosition, animation);
    this.translate(itemToMove, translatePostion);
  }

  public moveToEdgeSlideWithoutRewind(): void {
    let edgeSlide: HTMLElement;
    let containerTranslatePosition = 0;
    let edgeSlideTranslatePosition = 0;

    if (this.currentSlideIndex === 0) {
      edgeSlide = this.firstItem;
    } else {
      edgeSlide = this.lastItem;
      containerTranslatePosition = this.translateStep - 100;
      edgeSlideTranslatePosition = 0;
    }

    this.currentTranslatePosition = containerTranslatePosition;

    this.moveContainerWithEdgeSlide(edgeSlide, edgeSlideTranslatePosition, false);

    this.slidesHolder.nativeElement.removeEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
  }

  public moveEdgeSlides(changeSlidesPos: number, edgeSlide: HTMLElement, translatePostion: number): void {
    this.currentTranslatePosition = changeSlidesPos;
    this.moveContainerWithEdgeSlide(edgeSlide, translatePostion, this.slideshowTransitionEnabled);
    this.slidesHolder.nativeElement.addEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
  }

  public moveSlider(translatePostion: number): void {
    this.currentTranslatePosition += translatePostion;
    this.translate(this.slidesHolder.nativeElement, this.currentTranslatePosition, this.slideshowTransitionEnabled);
  }
}
