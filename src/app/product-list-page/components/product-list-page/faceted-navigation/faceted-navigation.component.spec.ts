import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FacetedNavigationComponent } from './faceted-navigation.component';
import { RadioFilterComponent } from './radio-filter/radio-filter.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { PriceRangeFilterComponent } from './price-range-filter/price-range-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('FacetedNavigationComponent', () => {
  let component: FacetedNavigationComponent;
  let fixture: ComponentFixture<FacetedNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FacetedNavigationComponent,
        CheckboxFilterComponent,
        PriceRangeFilterComponent,
        RadioFilterComponent
      ],
      imports: [ FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
