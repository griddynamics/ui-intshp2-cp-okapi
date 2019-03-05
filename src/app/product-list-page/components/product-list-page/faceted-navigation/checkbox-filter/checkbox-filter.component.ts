import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { BaseFilter } from '../base-filter';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends BaseFilter implements OnInit {
  @Input() public filter;
  @Input() public checkedCheckboxArr?;
  public parsedCheckboxArr = [];
  private filterValue: string[] = [];

  ngOnInit(): void {
    this.filterValue = this.parseParams(this.defaultParams);

  }
  public checkField(field) {
    return this.filterValue.some(el => el === field);
  }

  public getFilterValue(value: string): any {
    if (!this.filterValue.includes(value)) {
      this.filterValue.push(value);
    } else {
      this.filterValue = this.filterValue.filter(val => val !== value);
    }
    return this.filterValue;
  }
}
