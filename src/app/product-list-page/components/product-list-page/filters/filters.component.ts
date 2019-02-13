import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  public isChecked = false;
  public rangeValue = 0;
  public range = [10, 100];

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

  valueChanged(e) {
    this.rangeValue = e.target.value;

    if (this.range[0] > this.range[1]) {
      this.range.reverse();
    }
  }

  validateMin(e) {
    if (e.target.value >= this.range[1]) {
      e.preventDefault();
      this.range[0] = this.range[1];
    }
  }

  validateMax(e) {
    if (e.target.value <= this.range[0]) {
      e.preventDefault();
      this.range[1] = this.range[0];
    }
  }
}
