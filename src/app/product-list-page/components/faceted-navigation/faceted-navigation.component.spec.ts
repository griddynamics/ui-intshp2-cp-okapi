import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FacetedNavigationComponent, RadioFilterComponent, CheckboxFilterComponent, PriceRangeFilterComponent } from '../';

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
      imports: [ FormsModule, HttpClientTestingModule, RouterTestingModule ]
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
