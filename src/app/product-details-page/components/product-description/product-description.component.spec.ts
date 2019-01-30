import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDescriptionComponent } from './product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ZoomComponent } from './product-image-preview/zoom/zoom.component';
import { ProductImagePreviewComponent } from './product-image-preview/product-image-preview.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDescriptionComponent', () => {
  const productInfo = {
    name: 'Reebock Track Jacket',
    title: 'Half Jacket + Skiny Trousers + Boot leather',
    description: 'Lorem Lorem Lorem',
  };
  let component;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        ProductDescriptionComponent, ProductImagePreviewComponent,
        ProductOrderComponent,
        ZoomComponent
      ],
    }).compileComponents();
  }));

  it('renders a h2 with the provided label text', () => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    component.product = productInfo;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain(productInfo.name);
  });

  it('renders a h5 with the provided label text', () => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    component.product = productInfo;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h5').textContent).toContain(productInfo.title);
  });

  it('renders a p with the provided label text', () => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    component.product = productInfo;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(productInfo.description);
  });
});
