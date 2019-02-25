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
  public subscription;

  @Input() filters: IFilter[] = [];

  closeNav() {
    this.isShowed = false;
  }

  openNav() {
    this.isShowed = true;
  }

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

  dropdownToggle() {
    this.isDropped = !this.isDropped;
  }
}
