import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CheckboxFilterComponent } from './checkbox-filter.component';

describe('CheckboxFilterComponent', () => {
  let component: CheckboxFilterComponent;
  let fixture: ComponentFixture<CheckboxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterComponent);
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

});
