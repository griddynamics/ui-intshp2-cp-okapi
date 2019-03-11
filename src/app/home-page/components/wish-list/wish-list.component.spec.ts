import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';

import { WishListComponent } from './wish-list.component';

describe('WishlistComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListComponent ],
      imports: [ RouterTestingModule, HttpClientModule, SharedModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
