import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends FacetedNavigationComponent {
  @Input() public filter;
  @Output() public checkboxTriggered = new EventEmitter();
  public isChecked: Boolean = false;

  public toggleCheck(event, field, filterName) {
    let isChecked = false;
    event.target.checked ? isChecked = true : isChecked = false;
    this.checkboxTriggered.emit({filterName, field, isChecked})
  }
}
