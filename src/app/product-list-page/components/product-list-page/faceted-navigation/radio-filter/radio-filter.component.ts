import { Component, ViewEncapsulation, Input } from '@angular/core';
import { FacetedNavigationComponent } from '../faceted-navigation.component';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioFilterComponent extends FacetedNavigationComponent {

  @Input() public filter;

}
