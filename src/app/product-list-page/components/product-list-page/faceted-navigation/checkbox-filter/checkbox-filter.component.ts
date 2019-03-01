import { Component, ViewEncapsulation, Input } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends BaseFilter {
  @Input() public filter;

  private filterValue: string[] = [];

  public getFilterValue(value: string): any {
    if (!this.filterValue.includes(value)) {
      this.filterValue.push(value);
    } else {
      this.filterValue = this.filterValue.filter(val => val !== value);
    }
    return this.filterValue;
  }
}
