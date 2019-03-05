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
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore;

  private itemStep = 3;
  private wrapperWidth: number;
  private resizeEvent: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.resizeEvent = fromEvent(window, 'resize').pipe(
      debounceTime(100)
    ).subscribe(this.countItems.bind(this));
    this.countItems();
    this.cdRef.detectChanges();
  }

  ngAfterContentChecked(): void {
    this.countItems();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.resizeEvent.unsubscribe();
  }

  public onLoadMore(): void {
    this.loadMore.emit(this.itemStep);
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
