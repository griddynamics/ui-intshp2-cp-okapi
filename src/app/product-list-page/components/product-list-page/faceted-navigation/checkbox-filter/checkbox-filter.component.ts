import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ProductListPageComponent } from '../../product-list-page.component';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent extends ProductListPageComponent {
  @Input() public filter;

}
