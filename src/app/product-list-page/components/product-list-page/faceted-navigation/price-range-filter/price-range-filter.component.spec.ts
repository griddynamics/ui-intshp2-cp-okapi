import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PriceRangeFilterComponent } from './price-range-filter.component';

describe('PriceRangeFilterComponent', () => {
  let component: PriceRangeFilterComponent;
  let fixture: ComponentFixture<PriceRangeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangeFilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change range value', () => {
    component.range = [2, 1];
    let e = {target: {value: 1}};
    component.valueChanged(e);
    expect(component.range).toBe(component.range.reverse());

    component.range = [0, 1];
    e = {target: {value: 1}};
    component.valueChanged(e);
    expect(component.range).toBe(component.range);
  });

  it('should validate min value', () => {
    component.range = [0, 1];
    let ev = {target: {value: 2}, preventDefault: () => {}};
    component.validateMin(ev);
    expect(component.range[0]).toBe(1);

    component.range = [0, 1];
    ev = {target: {value: 0}, preventDefault: () => {}};
    component.validateMin(ev);
    expect(component.range[0]).toBe(0);
  });

  it('should validate max value', () => {
    component.range = [1, 2];
    let ev = {target: {value: 0}, preventDefault: () => {}};
    component.validateMax(ev);
    expect(component.range[1]).toBe(1);

    component.range = [0, 1];
    ev = {target: {value: 2}, preventDefault: () => {}};
    component.validateMax(ev);
    expect(component.range[1]).toBe(1);
  });
});
