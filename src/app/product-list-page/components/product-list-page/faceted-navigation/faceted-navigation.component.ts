import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IFilter } from 'src/app/shared/interfaces/product';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-faceted-navigation',
  templateUrl: './faceted-navigation.component.html',
  styleUrls: ['./faceted-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacetedNavigationComponent implements OnInit {
  public isShowed = false;
  public isDropped = false;
  public filtersSubscriptions;

  @Output () public filterChange = new EventEmitter();

  filters: IFilter[] = [];

  constructor(
    private dataService: DataService
  ) { }

  checkboxEmiter(e) {
    this.filterChange.emit(e);
  }


  ngOnInit() {
    this.filtersSubscriptions = this.dataService.get('api/filters').subscribe(data => {
        this.filters = data;
      });
  }

  // ngOnDestroy(): void {
  //   this.filtersSubscriptions.unsubscribe();
  // }

  closeNav() {
    this.isShowed = false;
  }

  openNav() {
    this.isShowed = true;
  }

  dropdownToggle() {
    this.isDropped = !this.isDropped;
  }
}
