import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioFilterComponent extends FacetedNavigationComponent {

  @Input() public filter;
  @Output() public checkboxTriggered = new EventEmitter();
  public isChecked: Boolean = false;

  public toggleCheck(event, field, filterName) {
    let isChecked = false;
    event.target.checked ? isChecked = true : isChecked = false;
    this.checkboxTriggered.emit({filterName, field, isChecked});
  }

}
