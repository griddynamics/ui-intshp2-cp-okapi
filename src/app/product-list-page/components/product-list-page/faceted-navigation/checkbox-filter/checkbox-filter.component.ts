import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';
import { BaseFilter } from '../filterBase';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends BaseFilter {
  @Input() public filter;

  private filterValue: string[] = [];

  getFilterValue(value: string): any {
    if(!this.filterValue.includes(value))
      this.filterValue.push(value);
    else {
      this.filterValue = this.filterValue.filter(val => val !== value);
    }

    return this.filterValue;
  }

  

}
