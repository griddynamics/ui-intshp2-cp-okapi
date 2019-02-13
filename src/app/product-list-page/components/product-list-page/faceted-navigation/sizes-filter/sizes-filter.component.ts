import { Component } from '@angular/core';

@Component({
  selector: 'app-sizes-filter',
  templateUrl: './sizes-filter.component.html',
  styleUrls: ['./sizes-filter.component.scss']
})
export class SizesFilterComponent {

  public isChecked = false;

  toggleCheck(event) {
    event.target.checked ? this.isChecked = true : this.isChecked = false;
  }

}
