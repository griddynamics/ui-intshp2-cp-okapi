import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListPageComponent } from './product-list-page.component';
import { FacetedNavigationComponent } from './faceted-navigation/faceted-navigation.component';
import { CheckboxFilterComponent } from './faceted-navigation/checkbox-filter/checkbox-filter.component';
import { PriceRangeFilterComponent } from './faceted-navigation/price-range-filter/price-range-filter.component';
import { RadioFilterComponent } from './faceted-navigation/radio-filter/radio-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductListPageComponent', () => {
  let component: ProductListPageComponent;
  let fixture: ComponentFixture<ProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
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
    expect(component).toBeTruthy();
  });

  it('should call function onLoadMore when if statement is false', () => {
    component.loadTo = 1;
    component.totalAmount = 2;
    component.onLoadMore(0);
    fixture.detectChanges();
    expect(component.loadTo).not.toBe(component.totalAmount);
  });

  it('should call function onLoadMore when if statement is true', () => {
    component.loadTo = 2;
    component.totalAmount = 1;
    component.onLoadMore(2);
    fixture.detectChanges();
    expect(component.loadTo).toBe(component.totalAmount);
  });

  it('should enable scroll if loadMoreScrollEnabled is true', () => {
    component.loadMoreScrollEnabled = true;
    fixture.detectChanges();
    component.ngAfterViewInit();
  });

  it('should disable scroll if loadMoreScrollEnabled is false', () => {
    component.loadMoreScrollEnabled = false;
    fixture.detectChanges();
    component.ngAfterViewInit();
  });

  it('should not unsubscribe if subscription is false', () => {
    component.subscription = false;
    fixture.detectChanges();
    component.ngOnDestroy();
  });
  it('should unsubscribe if subscription is true', () => {
    component.subscription = true;
    fixture.detectChanges();
    component.ngOnDestroy();
  });
});
