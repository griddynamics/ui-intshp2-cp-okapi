import { Component, OnInit, Input, AfterViewInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ProductItemService } from 'src/app/core/services/product-item.service';
import { IProduct } from '../../interfaces/product';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('wrapper') wrapper;
  @ViewChild('child') child;
  @Input() allProducts: number;

  // i need to hardcode this value because anotherway i can not check offsetwidth,
  // this will be immediately fixed in ngAfterViewInit
  public visibleWishItems = 1;
  public wishlist: IProduct[];
  private wrapperWidth;
  private singleWishListItem;
  private onResize;
  private addItemsStep;

  constructor(
    private productItem: ProductItemService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productItem.productsSubscribers.subscribe(data => {
      this.wishlist = data;
    });

    this.onResize = fromEvent(window, 'resize').pipe(
      debounceTime(300)
    ).subscribe(e => {
      this.countItemsInViewPort();
    });
  }

  ngAfterViewInit(): void {
    this.countItemsInViewPort();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.onResize.unsubscribe();
  }

  public loadMoreHandler(): void {
    this.visibleWishItems += this.addItemsStep;
  }

  private countItemsInViewPort(): void {
    if (this.visibleWishItems !== this.allProducts) {
      this.wrapperWidth = this.wrapper.nativeElement.offsetWidth;
      this.singleWishListItem = this.child.nativeElement.nextElementSibling.offsetWidth;
      this.visibleWishItems = Math.floor(this.wrapperWidth / this.singleWishListItem);
      this.addItemsStep = this.visibleWishItems;
    }
  }
}
