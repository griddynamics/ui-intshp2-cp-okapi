import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { FormsModule } from '@angular/forms';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isChecked depending on event target', () => {
    component.isChecked = false;
    let event = {target: {checked: true}};
    component.toggleCheck(event);
    expect(component.isChecked).toBe(true);

    component.isChecked = false;
    event = {target: {checked: false}};
    component.toggleCheck(event);
    expect(component.isChecked).toBe(false);
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
