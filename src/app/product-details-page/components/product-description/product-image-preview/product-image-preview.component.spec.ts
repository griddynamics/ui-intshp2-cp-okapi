import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImagePreviewComponent } from './product-image-preview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ZoomComponent } from './zoom/zoom.component';

describe('ProductImagePreviewComponent', () => {
  let component: ProductImagePreviewComponent;
  let fixture: ComponentFixture<ProductImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImagePreviewComponent, ZoomComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
