import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductImagePreviewComponent } from '../product-description/product-image-preview/product-image-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductItemComponent } from 'src/app/shared/components/product-item/product-item.component';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPageComponent, ProductItemComponent],
      imports: [SharedModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
