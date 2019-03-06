import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImagePreviewComponent } from './product-image-preview.component';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductDescriptionComponent, ProductOrderComponent, ZoomComponent } from '../';

describe('ProductImagePreviewComponent', () => {
  let component: ProductImagePreviewComponent;
  let fixture: ComponentFixture<ProductImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImagePreviewComponent,
                     ProductDescriptionComponent,
                     ProductOrderComponent,
                     ZoomComponent ],
      imports: [RouterTestingModule]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(ProductImagePreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img if smallImagesArr has length', (() => {
    const swatches = ['http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png',
      'http://therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png'];
    component.swatchesToArray = swatches;
    fixture.detectChanges();
    spyOn(component, 'setSelectedImg').and.callThrough();
    const button = fixture.debugElement.nativeElement.querySelector('.img-render img');
    button.click();
    expect(component.setSelectedImg).toHaveBeenCalled();
  }));
});
