import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'app-price-range-filter',
  templateUrl: './price-range-filter.component.html',
  styleUrls: ['./price-range-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceRangeFilterComponent extends BaseFilter implements OnInit {
  @Input() public filter;
  public range = [];
  public step = 1;

  ngOnInit() {
    if (!this.filter) {
      return;
    }
    this.range = [...this.filter.range];
  }

  public valueChanged(e) {
    if (this.range[0] > this.range[1]) {
      this.range.reverse();
    }
  }

  public validateMin(e) {
    this.validateRange(e);
    if (e.target.value >= this.range[1]) {
      e.preventDefault();
      this.range[0] = this.range[1];
    }
  }

  public validateMax(e) {
    this.validateRange(e);
    if (e.target.value <= this.range[0]) {
      e.preventDefault();
      this.range[1] = this.range[0];
    }
  }

  public validateRange(e) {
    if (e.target.value > this.range[1]) {
      e.target.value = this.range[1];
      return;
    }
    if (e.target.value < this.range[0] || e.target.value === '') {
      e.target.value = this.range[0];
    }
  }
}
