import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements AfterViewInit {

  observer: IntersectionObserver;

  constructor(public element: ElementRef) { }

  options: any = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  ngAfterViewInit() {
    const images = this.element.nativeElement.querySelectorAll('.lazy-load');
    this.observer = new IntersectionObserver(this.handleIntersection, this.options);
    images.forEach(img => {
      this.observer.observe(img);
    });
  }

  fetchImage = (url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  loadImage = (target) => {
    const isBackground = !!target.dataset.bgSrc;
    const src = isBackground ? target.dataset.bgSrc : target.dataset.src;
    if (!src) { return; }

    this.fetchImage(src).then(() => {
      this.observer.unobserve(target);
      target.classList.add('loadeding');
      if (isBackground) {
        target.removeAttribute('data-bg-src');
        target.style.backgroundImage = `url(${src})`;
      } else {
        target.removeAttribute('data-src');
        target.src = src;
      }
      target.classList.add('loaded');
    });
  }

  handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.loadImage(entry.target);
      }
    });
  }

}
