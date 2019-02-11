import { Component, ContentChild, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {

  observer: IntersectionObserver;
  inView = false;
  visible = false;

  @ContentChild(TemplateRef) template: TemplateRef<any>;
  options: any = {threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9]};

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
      this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
      this.observer.observe(this.element.nativeElement);
  }

  handleIntersect(entries, observer): void {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.inView = true;
        this.defaultInViewHandler(entry);
      }
    });
  }

  defaultInViewHandler(entry: any) {
    if (this.visible) {
      return false;
    }
    if (entry.intersectionRatio < 0.8) {
      const opacity = entry.intersectionRatio;
      Object.assign(entry.target.style, {opacity});
    } else {
       entry.target.style.opacity = 1;
       this.visible = true;
    }
  }
}
