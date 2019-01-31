import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onLoadMore(): void {
    this.loadMore.emit();
  }
}
