import {
  Component,
  ViewChild,
  ElementRef,
  OnDestroy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnDestroy, AfterContentChecked {
  @ViewChild('wrapper') wrapper: ElementRef;
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore;

  private itemStep = 3;
  private onResize: Subscription;

  constructor(private cdRef: ChangeDetectorRef) { }

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
