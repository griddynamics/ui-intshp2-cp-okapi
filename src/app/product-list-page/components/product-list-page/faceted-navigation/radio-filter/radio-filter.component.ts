import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioFilterComponent {

  @Input() public filter;
  public isChecked = false;

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

}
