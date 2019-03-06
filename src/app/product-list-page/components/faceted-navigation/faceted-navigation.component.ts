import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IFilter } from '../../../shared/interfaces';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent implements OnInit {
  public isShowed = false;
  public subscription;
  private currentFilters = {};

  @Output() filterChange = new EventEmitter();

  @Input() filters: IFilter[] = [];
  @Input() defaultParams: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentFilters = { ...this.defaultParams };
  }

  public getDefaultParams(filter: IFilter): any {
    return this.defaultParams[filter.name];
  }

  public closeNav() {
    this.isShowed = false;
  }

  public openNav() {
    this.isShowed = true;
  }

  public onFilterChange({ name, value }) {
    this.currentFilters[name] = value;
    for (const key of Object.keys(this.currentFilters)) {
      if (!this.currentFilters[key].length) {
        delete this.currentFilters[key];
      }
      if (typeof this.currentFilters[key] === 'object') {
        this.currentFilters[key] = this.currentFilters[key].join(',');
      }
    }
    this.router.navigate(['/products'], { queryParams: this.currentFilters });
  }
}
