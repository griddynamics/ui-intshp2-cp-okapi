import { Component, ViewEncapsulation } from '@angular/core';
import { IFilter } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent {
  filters: IFilter[] = [
    {
      'type': 'radio',
      'name': 'gender',
      'fields': ['man', 'woman', 'children']
    },
    {
      'type': 'checkbox',
      'name': 'category',
      'fields': ['coats', 'panties', 'shoes', 'underwear']
    },
    {
      'type': 'checkbox',
      'name': 'size',
      'fields': ['small', 'medium', 'large', 'x large']
    },
    {
      'type': 'range',
      'name': 'price',
      'range': [0, 100]
    },
    {
      'type': 'checkbox',
      'name': 'brand',
      'fields': ['reebock', 'addidas', 'nike', 'active']
    }
  ];

}
