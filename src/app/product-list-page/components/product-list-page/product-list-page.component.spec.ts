import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListPageComponent } from './product-list-page.component';
import { FacetedNavigationComponent } from './faceted-navigation/faceted-navigation.component';
import { CheckboxFilterComponent } from './faceted-navigation/checkbox-filter/checkbox-filter.component';
import { PriceRangeFilterComponent } from './faceted-navigation/price-range-filter/price-range-filter.component';
import { RadioFilterComponent } from './faceted-navigation/radio-filter/radio-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [
        ProductListPageComponent,
        FacetedNavigationComponent,
        CheckboxFilterComponent,
        PriceRangeFilterComponent,
        RadioFilterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.subscription = true;
    expect(component).toBeTruthy();
  });

  it('should create when there is subscription', () => {
    component.subscription = true;
    expect(component).toBeTruthy();
    component.subscription = false;
    expect(component).toBeTruthy();
  });

});
