import { Component, Input, ViewChild, OnDestroy, ElementRef, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products: IProduct[] = [];

  public visibleWishItems = 1;
  private wrapperWidth: number;
  private addItemsStep: number;
  private onResizeSubscription: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.onResizeSubscription = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(this.countItemsInViewPort.bind(this));
  }

  ngAfterViewInit(): void {
    this.countItemsInViewPort();

    // i cannot avoid next line usage, because in ngAfterViewInit we have logic, that changes view
    // 1 if u delete this line we will get an error Expression has changed after it was checked.
    // 2 after that we have to detect changes in order to update UI which takes few seconds.
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.onResizeSubscription.unsubscribe();
  }

  public loadMoreHandler(): void {
    this.visibleWishItems += this.addItemsStep;
  }

  private countItemsInViewPort(): void {
    const { nativeElement } = this.wrapper;
    this.wrapperWidth = nativeElement.offsetWidth;

    if (!nativeElement.children.length) {
      return;
    }

    this.visibleWishItems = Math.floor(this.wrapperWidth / nativeElement.children[0].offsetWidth);
    this.addItemsStep = this.visibleWishItems;
  }
}
