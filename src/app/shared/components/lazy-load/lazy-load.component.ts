import {   Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit, OnDestroy {

  observer: IntersectionObserver;
  inView = false;
  once50PctVisibl = false;


  @ContentChild(TemplateRef) template: TemplateRef<any>;
  options: any = {threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9]};
  // tslint:disable-next-line:no-output-rename
  @Output('inView') inView$: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('notInView') notInView$: EventEmitter<any> = new EventEmitter();

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
      this.observer.observe(this.element.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  handleIntersect(entries, observer): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.inView = true;
        this.defaultInViewHandler(entry);
        this.inView$.emit(entry);
      } else {
        this.notInView$.emit(entry);
      }
    });
  }

  defaultInViewHandler(entry) {
    if (this.once50PctVisibl) {
      return false;
    }
    if (this.inView$.observers.length) {
      return false;
    }

    if (entry.intersectionRatio < 0.8) {
      const opacity = entry.intersectionRatio * (1 / 0.8);
    //  const blur = 20 - Math.floor(entry.intersectionRatio * 10) * 4;
    //  const filter = `blur(${blur}px)`;
      Object.assign(entry.target.style, {opacity});
    } else {
       entry.target.style.opacity = 1;
      //  entry.target.style.filter = 'unset';
       this.once50PctVisibl = true;
    }
  }
}
