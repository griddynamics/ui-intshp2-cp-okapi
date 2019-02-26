import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ProductListPageComponent } from '../../product-list-page.component';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioFilterComponent extends ProductListPageComponent {

  @Input() public filter;

}
