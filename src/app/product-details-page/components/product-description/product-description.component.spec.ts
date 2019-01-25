import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDescriptionComponent } from './product-description.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ZoomitComponent } from './product-image-preview/zoomit/zoomit.component';

describe('ProductDescriptionComponent', () => {
  let component: ProductDescriptionComponent;
  let fixture: ComponentFixture<ProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDescriptionComponent, ZoomitComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
