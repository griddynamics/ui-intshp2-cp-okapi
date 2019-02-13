import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxFilterComponent {

  public isChecked = false;

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

}
