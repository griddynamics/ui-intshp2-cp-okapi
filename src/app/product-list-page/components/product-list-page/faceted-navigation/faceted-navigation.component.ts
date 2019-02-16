import { Component, ViewEncapsulation, Input } from '@angular/core';
import { IFilter } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent {
  public isShowed = false;
  public isChecked = false;
  public isDropped = false;

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
      'fields': ['s', 'm', 'l', 'xl']
    },
    {
      'type': 'range',
      'name': 'price',
      'range': [25, 130]
    },
    {
      'type': 'checkbox',
      'name': 'brand',
      'fields': ['reebock', 'addidas', 'nike', 'active']
    }
  ];

  closeNav() {
    this.isShowed = false;
    console.log(this.isShowed);
  }

  openNav() {
    this.isShowed = true;
    console.log(this.isShowed);
  }

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

  dropdownToggle() {
    this.isDropped = !this.isDropped;
  }
}
