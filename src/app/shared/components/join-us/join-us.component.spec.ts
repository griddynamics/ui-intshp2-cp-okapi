import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { JoinUsComponent } from './join-us.component';

describe('JoinUsComponent', () => {
  let component: JoinUsComponent;
  let fixture: ComponentFixture<JoinUsComponent>;
  let debugEl: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ JoinUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('form'));
    el = debugEl.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit method', () => {
    component.onSubmit();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', () => {
    component.submitForm.controls['email'].setValue('');
    expect(component.submitForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.submitForm.controls['email'].setValue('asd@asd.com');
    expect(component.submitForm.valid).toBeTruthy();
  });
});
