import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent {

  public singleChoise = true;
  public multipleChoise = true;

}
