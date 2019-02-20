import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends FacetedNavigationComponent {
  @Input() public filter;

}
