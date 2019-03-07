import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { BaseFilter } from '../base-filter';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioFilterComponent extends BaseFilter implements OnInit {
  @Input() public filter;
  public checked;

  ngOnInit(): void {
    this.checked = this.defaultParams;
  }
}
