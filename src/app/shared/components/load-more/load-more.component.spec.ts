import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run IntersectionObserver when if statement is true', () => {
    component.loadMoreScrollEnabled = true;
    component.ngOnInit();
  });
  it('should not run IntersectionObserver when if statement is false', () => {
    component.loadMoreScrollEnabled = false;
    component.ngOnInit();
  });
});
