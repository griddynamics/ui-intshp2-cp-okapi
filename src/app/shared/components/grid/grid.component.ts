import {
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnDestroy, AfterContentChecked, AfterViewInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Input() wrapperClassName?: string;
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore;

  private itemStep = 3;
  private onResize: Subscription;
  gridWrapperShort;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.gridWrapperShort = document.querySelector('app-product-item-short');
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.onResize) {
      this.onResize.unsubscribe();
    }
  }

  public onLoadMore(): void {
    this.loadMore.emit(this.itemStep);
  }
}
