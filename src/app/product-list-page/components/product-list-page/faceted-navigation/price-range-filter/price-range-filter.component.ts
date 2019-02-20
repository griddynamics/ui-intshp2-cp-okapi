import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';

@Component({
  selector: 'app-price-range-filter',
  templateUrl: './price-range-filter.component.html',
  styleUrls: ['./price-range-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceRangeFilterComponent extends FacetedNavigationComponent implements OnInit  {
  @Input() public filter;
  public range = [];
  public step = 1;
  @Output() public priceChange = new EventEmitter();
  public isChecked: Boolean = false;

  ngOnInit() {
    if (!this.filter) {
      return;
    }
    this.range = [...this.filter.range];
  }

  valueChanged(event, field, filterName) {
    if (this.range[0] > this.range[1]) {
      this.range.reverse();
    }
  }
  public toggleCheck(){
    let isChecked = false;
    let range0 = this.filter.range[0];
    let range1 = this.filter.range[1];
    
    if (range0 !== this.range[0] || range1 !== this.range[1]) {
      let isChecked = true;
      // console.log(this.range[0], this.range[1], isChecked);
      // console.log(event);
    }
    this.priceChange.emit({filterName: 'price', field: `${this.range[0]},${this.range[1]}`, isChecked: true});
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
    if (e.target.value >  this.range[1]) {
      e.target.value =  this.range[1];
      return;
    }
    if (e.target.value <  this.range[0] || e.target.value === '') {
      e.target.value =  this.range[0];
    }
  }
}
