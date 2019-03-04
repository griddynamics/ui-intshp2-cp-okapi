import { Component,
        ViewChild,
        ElementRef,
        OnDestroy,
        ChangeDetectorRef,
        Input,
        Output,
        EventEmitter,
        AfterContentChecked,
        AfterViewInit,
        OnInit} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy, AfterContentChecked, OnInit, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore;

  private itemStep = 1;
  private wrapperWidth: number;
  private onResize: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.onResize = fromEvent(window, 'resize').pipe(
      debounceTime(300)
    ).subscribe(e => {
      this.countItems();
    });
  }

  ngAfterContentChecked(): void {
    this.countItems();
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.countItems();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.onResize.unsubscribe();
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
