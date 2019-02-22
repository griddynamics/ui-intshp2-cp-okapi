import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { IFilter } from 'src/app/shared/interfaces/product';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent implements OnInit, OnDestroy {
  public isShowed = false;
  public isChecked = false;
  public isDropped = false;
  public subscription;

  filters: IFilter[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.get(environment.filtersURL).subscribe(data =>
      this.filters = data
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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
