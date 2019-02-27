import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { IFilter } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent {
  public isShowed = false;
  public isDropped = false;
  public subscription;
  private currentFilters = {};

  @Output() filterChange = new EventEmitter();

  @Input() filters: IFilter[] = [];

  closeNav() {
    this.isShowed = false;
  }

  openNav() {
    this.isShowed = true;
  }

  dropdownToggle() {
    this.isDropped = !this.isDropped;
  }

  onFilterChange({ name, value }) {
    this.currentFilters[name] = value;
    for (let key in this.currentFilters) {
      if (!this.currentFilters[key].length) {
        delete this.currentFilters[key]
      }
      if(typeof this.currentFilters[key] === 'object') {
        this.currentFilters[key] = this.currentFilters[key].join(',')
      }
    }
    this.filterChange.emit(this.currentFilters);
  }
}
