import { Component,
        ViewChild,
        ElementRef,
        OnDestroy,
        ChangeDetectorRef,
        Input,
        Output,
        EventEmitter,
        AfterContentChecked,
        AfterViewInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy, AfterContentChecked, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() products;
  @Output() visibleItemsTest = new EventEmitter();
  @Input() visibleItems;

  private itemStep = 1;
  private wrapperWidth: number;
  private resizeEvent: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.countItems();
    this.cdRef.detectChanges();
  }
  ngAfterViewInit(): void {
    this.resizeEvent = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(this.countItems.bind(this));

    this.countItems();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.resizeEvent.unsubscribe();
  }

  public addItems(): void {
    this.visibleItems += this.itemStep;
    this.visibleItemsTest.emit(this.itemStep);
  }

  private countItems() {
    const { nativeElement } = this.wrapper;
    this.wrapperWidth = nativeElement.offsetWidth;

    if (!nativeElement.children.length) {
      return;
    }

    this.itemStep = Math.floor(this.wrapperWidth / nativeElement.children[0].offsetWidth);
  }
}
