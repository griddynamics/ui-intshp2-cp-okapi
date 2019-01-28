import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageComponent } from './product-details-page.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ZoomitComponent } from '../product-description/product-image-preview/zoomit/zoomit.component';
import { ProductImagePreviewComponent } from '../product-description/product-image-preview/product-image-preview.component';

describe('ProductDetailsPageComponent', () => {
  let component: ProductDetailsPageComponent;
  let fixture: ComponentFixture<ProductDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsPageComponent, ProductDescriptionComponent, ProductImagePreviewComponent,
      ZoomitComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
