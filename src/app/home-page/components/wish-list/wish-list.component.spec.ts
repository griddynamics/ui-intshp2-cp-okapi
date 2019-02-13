import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponent } from './wish-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

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
