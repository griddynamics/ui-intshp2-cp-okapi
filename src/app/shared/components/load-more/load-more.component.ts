import { Component, EventEmitter, Output, Input, AfterViewInit, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { KillswitchService } from 'src/app/core/services';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() loadMore = new EventEmitter();
  @Input() showLoadMore: boolean;
  @ViewChild('loadMoreButton') loadMoreButton: ElementRef;

  public loadMoreScrollEnabled = false;
  public io: IntersectionObserver;

  constructor(private killswitchService: KillswitchService) {
    this.loadMoreScrollEnabled = this.killswitchService.getKillswitch('loadMoreScrollEnabled');
  }

  ngOnInit(): void {
    if (this.loadMoreScrollEnabled) {
      this.io = new IntersectionObserver(this.handleIntersection.bind(this), {
        rootMargin: '0px',
        threshold: 1
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.io) {
      this.io.observe(this.loadMoreButton.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.io.disconnect();
  }

  public onLoadmore(): void {
    this.loadMore.emit();
  }

  private handleIntersection(entries): void {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        if (!this.showLoadMore) {
          return this.io.unobserve(entry.target);
        }

        this.onLoadmore();
      }
    });
  }
}
