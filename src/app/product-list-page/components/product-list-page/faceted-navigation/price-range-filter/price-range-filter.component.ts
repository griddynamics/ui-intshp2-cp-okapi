import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-price-range-filter',
  templateUrl: './price-range-filter.component.html',
  styleUrls: ['./price-range-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceRangeFilterComponent {

  public rangeValue = 0;
  public range = [10, 100];

  valueChanged(e) {
    this.rangeValue = e.target.value;

    if (this.range[0] > this.range[1]) {
      this.range.reverse();
    }
  }

  validateMin(e) {
    this.validateRange(e);
    if (e.target.value >= this.range[1]) {
      e.preventDefault();
      this.range[0] = this.range[1];
    }
  }

  validateMax(e) {
    this.validateRange(e);
    if (e.target.value <= this.range[0]) {
      e.preventDefault();
      this.range[1] = this.range[0];
    }
  }

  validateRange(e) {
    if (e.target.value > 100) {
      e.target.value = '100';
    } else if (e.target.value < 0 || e.target.value === '') {
      e.target.value = '0';
    }
  }
}
