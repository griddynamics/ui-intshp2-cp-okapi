import { Component, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LazyLoadComponent implements AfterViewInit {

  private observer: IntersectionObserver;

  constructor(public element: ElementRef) { }

  private options: any = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  ngAfterViewInit() {
    const images = this.element.nativeElement.querySelectorAll('.lazy-load');
    if (!images) { return; }
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.options);
    images.forEach(img => {
      this.observer.observe(img);
    });
  }

  private fetchImage(url: String): Promise<any> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = String(url);
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  private loadImage(target: HTMLImageElement): void {
    const isBackground = !!target.dataset.bgSrc;
    const src = isBackground ? target.dataset.bgSrc : target.dataset.src;
    if (!src) { return; }

    this.fetchImage(src).then(() => {
      this.observer.unobserve(target);
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

  private handleIntersection(entries): void {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.loadImage(entry.target);
      }
    });
  }

}

