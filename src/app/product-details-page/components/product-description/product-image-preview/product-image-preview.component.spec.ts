import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImagePreviewComponent } from './product-image-preview.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductImagePreviewComponent', () => {
  let component: ProductImagePreviewComponent;
  let fixture: ComponentFixture<ProductImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImagePreviewComponent ],
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
