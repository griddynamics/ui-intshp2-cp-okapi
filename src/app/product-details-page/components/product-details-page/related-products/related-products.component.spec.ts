import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedProductsComponent } from './related-products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule} from '@angular/common/http';


describe('RelatedProductsComponent', () => {
  let component: RelatedProductsComponent;
  let fixture: ComponentFixture<RelatedProductsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      declarations: [RelatedProductsComponent],
      providers: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(RelatedProductsComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
