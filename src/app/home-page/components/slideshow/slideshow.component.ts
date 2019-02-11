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
  @ViewChild('bullet') bullet: ElementRef;

  responseImgs: any[] = [
    'http://forgedground.com/image/cache/catalog/Slideshow/forged-ground-featured-official-merch-es-1540x650.jpg',
    'https://myupdateweb.com/wp-content/uploads/2017/07/Bluehost.com_-1-1540x650.png',
    'http://forgedground.com/image/cache/catalog/viking-medieval-escudos-cascos-cuernos-espadass-accesorios-forgedground-1540x650.jpg',
    'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main1-1540x650.jpg',
    'http://www.opencart.lionode.com/leoc04_2_2018/oc01/image/cache/catalog/banner%20main2-1540x650.jpg'
  ];

  public isHovered = false;
  public selectedSlideIndex = 0;
  public isStoped = false;
  public slideshowTransitionEnabled: Boolean;
  public slidesLength: number;
  public moveToEdgeSlideWithoutRewindOpacity;
  private currentSlideIndex = 0;
  private translateStep: number;
  private currentTranslatePosition: number;
  private totalSlidesSize: number;
  private firstItem: HTMLElement;
  private lastItem: HTMLElement;
  private intervalStart;
  private subscriptions: Subscription[] = [];


  constructor(
    private killswitchService: KillswitchService
  ) {
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
    this.slideshowTransitionEnabled = this.killswitchService.getKillswitch('slideshowTransitionEnabled');
    this.intervalStart = setInterval(() => {
      if (this.slideshowTransitionEnabled) {
        this.moveSlide(SLIDE_DIRECTION.RIGHT);
      } else {
        this.moveSliderOpacity(SLIDE_DIRECTION.RIGHT);
      }
    }, 4000);
  }

  ngAfterViewInit(): void {

    if (this.slideshowTransitionEnabled) {
      this.handleClick([
        {
          el: this.next.nativeElement,
          callback: () => {
            this.moveSlide(SLIDE_DIRECTION.RIGHT);
          }
        },
        {
          el: this.back.nativeElement,
          callback: () => {
            this.moveSlide(SLIDE_DIRECTION.LEFT);
          }
        }
      ]);
    } else {
      this.handleClick([
        {
          el: this.next.nativeElement,
          callback: () => {
            this.moveSliderOpacity(SLIDE_DIRECTION.RIGHT);
          }
        },
        {
          el: this.back.nativeElement,
          callback: () => {
            this.moveSliderOpacity(SLIDE_DIRECTION.LEFT);
          }
        }
      ]);
    }
    this.firstItem = this.slidesHolder.nativeElement.querySelector('.slide-item:first-child');
    this.lastItem = this.slidesHolder.nativeElement.querySelector('.slide-item:last-child');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    clearInterval(this.intervalStart);
  }

  public prepareSlideMove(moveDirection) {
    if (moveDirection) {
      this.currentTranslatePosition -= this.translateStep;
      this.selectedSlideIndex++;
      this.currentSlideIndex++;
    } else {
      this.currentTranslatePosition += this.translateStep;
      this.selectedSlideIndex--;
      this.currentSlideIndex--;
    }
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
  }

  public moveSlide(direction: SLIDE_DIRECTION): void {
    this.slidesHolder.nativeElement.style.transition = '';
    let edgeSlideIndex = 0;
    let translatePostion = this.translateStep;
    let step = this.currentTranslatePosition + this.translateStep;
    let itemToMove = this.lastItem;
    let itemToMovePosition = -this.totalSlidesSize;
    if (direction === SLIDE_DIRECTION.RIGHT) {
      edgeSlideIndex = this.slidesLength - 1;
      translatePostion = -this.translateStep;
      step = -100;
      itemToMove = this.firstItem;
      itemToMovePosition = this.totalSlidesSize;
    }
    if (this.currentSlideIndex === edgeSlideIndex) {
      this.currentSlideIndex = !edgeSlideIndex ? this.slidesLength - 1 : 0;
      this.moveEdgeSlides(step, itemToMove, itemToMovePosition);
    } else {
      edgeSlideIndex ? this.currentSlideIndex++ : this.currentSlideIndex--;
      this.moveSlides(translatePostion);
    }
    this.selectedSlideIndex = this.currentSlideIndex;
  }

  public bulletHandler(i: number): void {
    if (this.slideshowTransitionEnabled) {
      this.slidesHolder.nativeElement.style.transition = '';
    } else {
      this.slidesHolder.nativeElement.style.transition = 'none';
    }
    this.currentSlideIndex = i;
    this.selectedSlideIndex = this.currentSlideIndex;
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
        if (this.slideshowTransitionEnabled) {
          this.moveSlide(SLIDE_DIRECTION.RIGHT);
        } else {
          this.moveSliderOpacity(SLIDE_DIRECTION.RIGHT);
        }
      }, 4000);
    }
  }

  public handleClick(arr, time = 400) {
    this.subscriptions = arr.map(({ el, callback }) => {
      const stream = fromEvent(el, 'click');
      return stream.pipe(throttleTime(time)).subscribe(callback);
    });
  }

  public translateItem(item, step: number): void {
    const { nativeElement } = item;
    if (nativeElement) {
      nativeElement.style.transform = `translate(${step}%)`;
      return;
    }
    item.style.transform = `translate(${step}%)`;
  }

  public moveContainerAndItem(itemToMove: HTMLElement, direction: number): void {
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
    this.translateItem(itemToMove, direction);
  }

  public moveToEdgeSlideWithoutRewind(): void {
    this.slidesHolder.nativeElement.style.transition = 'none';
    let itemToMove;
    let containerMoveDirection = 0;
    let itemMoveDirection = 0;
    let changeTranslatePosition = 0;
    if (this.currentSlideIndex === 0) {
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

  public moveEdgeSlides(changeSlidesPos: number, itemToMove: HTMLElement, positionToMove: number): void {
    this.currentTranslatePosition = changeSlidesPos;
    this.moveContainerAndItem(itemToMove, positionToMove);
    this.slidesHolder.nativeElement.addEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
  }

  public moveSlides(translatePostion: number): void {
    this.currentTranslatePosition += translatePostion;
    this.translateItem(this.slidesHolder, this.currentTranslatePosition);
  }




  public moveSliderOpacity(direction: SLIDE_DIRECTION) {
    this.slidesHolder.nativeElement.style.transition = 'none';
    if (direction === SLIDE_DIRECTION.RIGHT) {
      this.currentSlideIndex !== this.slidesLength - 1 ? this.prepareSlideMoveOpacity(direction) : this.edgeMoveOpacity(direction);
    } else {
      this.currentSlideIndex !== 0 ? this.prepareSlideMoveOpacity(direction) : this.edgeMoveOpacity(direction);
    }
  }

  public edgeMoveOpacity(moveDirection) {
    if (!moveDirection) {
      this.currentSlideIndex = this.slidesLength - 1;
      this.selectedSlideIndex = this.slidesLength - 1;
      this.currentTranslatePosition = -100 + this.translateStep;
    } else {
      this.currentSlideIndex = 0;
      this.selectedSlideIndex = 0;
      this.currentTranslatePosition = 0;
    }
    this.slidesHolder.nativeElement.style.transform = `translate(${this.currentTranslatePosition}%)`;
  }

  public prepareSlideMoveOpacity(moveDirection) {
    if (moveDirection) {
      this.currentTranslatePosition -= this.translateStep;
      this.selectedSlideIndex++;
      this.currentSlideIndex++;
    } else {
      this.currentTranslatePosition += this.translateStep;
      this.selectedSlideIndex--;
      this.currentSlideIndex--;
    }
    this.translateItemOpacity(this.slidesHolder, this.currentTranslatePosition);
  }

  public moveSlideOpacity(direction: SLIDE_DIRECTION): void {
    let edgeSlideIndex = 0;
    let translatePostion = this.translateStep;
    let step = this.currentTranslatePosition + this.translateStep;
    let itemToMove = this.lastItem;
    let itemToMovePosition = -this.totalSlidesSize;
    if (direction === SLIDE_DIRECTION.RIGHT) {
      edgeSlideIndex = this.slidesLength - 1;
      translatePostion = -this.translateStep;
      step = -100;
      itemToMove = this.firstItem;
      itemToMovePosition = this.totalSlidesSize;
    }
    if (this.currentSlideIndex === edgeSlideIndex) {
      this.currentSlideIndex = !edgeSlideIndex ? this.slidesLength - 1 : 0;
      this.moveEdgeSlidesOpacity(step, itemToMove, itemToMovePosition);
    } else {
      edgeSlideIndex ? this.currentSlideIndex++ : this.currentSlideIndex--;
      this.moveSlidesOpacity(translatePostion);
    }
    this.selectedSlideIndex = this.currentSlideIndex;
  }

  public bulletHandlerOpacity(i: number): void {
    this.currentSlideIndex = i;
    this.selectedSlideIndex = this.currentSlideIndex;
    this.currentTranslatePosition = i * -this.translateStep;
    this.translateItemOpacity(this.slidesHolder, this.currentTranslatePosition);
  }

  public stopOpacity(): void {
    this.isStoped = true;
  }

  public pauseOpacity(): void {
    if (!this.isStoped) {
      this.isHovered = true;
      clearInterval(this.intervalStart);
    }
  }

  public continueOpacity(): void {
    if (!this.isStoped) {
      this.isHovered = false;
      this.intervalStart = setInterval(() => {
        if (this.slideshowTransitionEnabled) {
          this.moveSlide(SLIDE_DIRECTION.RIGHT);
        } else {
          this.moveSliderOpacity(SLIDE_DIRECTION.RIGHT);
        }
      }, 4000);
    }
  }

  public handleClickOpacity(arr, time = 400) {
    this.subscriptions = arr.map(({ el, callback }) => {
      const stream = fromEvent(el, 'click');
      return stream.pipe(throttleTime(time)).subscribe(callback);
    });
  }

  public translateItemOpacity(item, step: number): void {
    const { nativeElement } = item;
    if (nativeElement) {
      nativeElement.style.transform = `translate(${step}%)`;
      return;
    }
    item.style.transform = `translate(${step}%)`;
  }

  public moveContainerAndItemOpacity(itemToMove: HTMLElement, direction: number): void {
    this.translateItemOpacity(this.slidesHolder, this.currentTranslatePosition);
    this.translateItemOpacity(itemToMove, direction);
  }

  public moveEdgeSlidesOpacity(changeSlidesPos: number, itemToMove: HTMLElement, positionToMove: number): void {
    this.currentTranslatePosition = changeSlidesPos;
    this.moveContainerAndItemOpacity(itemToMove, positionToMove);
    this.slidesHolder.nativeElement.addEventListener(
      'transitionend',
      this.moveToEdgeSlideWithoutRewind
    );
  }

  public moveSlidesOpacity(translatePostion: number): void {
    this.currentTranslatePosition += translatePostion;
    this.translateItemOpacity(this.slidesHolder, this.currentTranslatePosition);
  }

}
