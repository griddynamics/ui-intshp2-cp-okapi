import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products;
  public visibleItems;

  private itemStep = 1;
  private wrapperWidth: number;
  private resizeEvent: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.resizeEvent = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(this.countItems.bind(this));
  }

  ngAfterViewInit(): void {
    this.countItems();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.resizeEvent.unsubscribe();
  }

  public addItems(): void {
    this.visibleItems += this.itemStep;
  }

  private countItems(): void {
    const { nativeElement } = this.wrapper;
    this.wrapperWidth = nativeElement.offsetWidth;
    if (!nativeElement.children.length) {
      return;
    }
    this.itemStep = Math.floor(this.wrapperWidth / nativeElement.children[0].offsetWidth);
    this.visibleItems = this.itemStep * 3;
  }
}
