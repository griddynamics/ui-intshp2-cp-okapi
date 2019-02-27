import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RadioFilterComponent } from './radio-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RadioFilterComponent', () => {
  let component: RadioFilterComponent;
  let fixture: ComponentFixture<RadioFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioFilterComponent ],
      imports: [ FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioFilterComponent);
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
