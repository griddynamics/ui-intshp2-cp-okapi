import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  observer: IntersectionObserver;

  constructor(public element: ElementRef) { }

  options: any = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  images = this.element.nativeElement.querySelectorAll('.img');

  ngOnInit() {
    this.observer = new IntersectionObserver(this.handleIntersection, this.options);
    this.images.forEach(img => {
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

loadImage = (image) => {
  const src = image.dataset.src;
  this.fetchImage(src).then(() => {
    image.src = src;
  });

}

handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log(entry.intersectionRatio);
      this.loadImage(entry.target);
    }
  });
}

}
