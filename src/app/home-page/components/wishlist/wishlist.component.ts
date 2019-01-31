import { Component, OnInit, Input, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() wishListArr: number;

  public visibleWishItems = 1;
  public wishlist: IProduct[];
  public sigleSlideItemWidth: number;
  public refToSingleItem;
  private wrapperWidth: number;
  private onResize: Subscription;
  private addItemsStep: number;

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getWishListArr().subscribe(data => {
      this.wishlist = data;
    });
  }

  ngAfterViewInit(): void {
    this.onResize = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(e => {
      if (this.wishListArr) {
        this.countItemsInViewPort(this.refToSingleItem);
      }
    });
  }

  ngOnDestroy(): void {
    this.onResize.unsubscribe();
  }

  public singleShortItemWidth(item): void {
    if (!this.refToSingleItem) {
      this.refToSingleItem = item;
      this.countItemsInViewPort(this.refToSingleItem);
    }
  }

  public loadMoreHandler(): void {
    if (this.wishListArr > this.visibleWishItems) {
      this.visibleWishItems += this.addItemsStep;
    }
  }

  private countItemsInViewPort(item): void {
    if (this.visibleWishItems !== this.wishListArr) {
      this.wrapperWidth = this.wrapper.nativeElement.offsetWidth;
      this.visibleWishItems = Math.floor(this.wrapperWidth / item.offsetWidth);
      this.addItemsStep = this.visibleWishItems;
    }
  }

}
