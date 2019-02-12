import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';
import { SharedModule } from '../../shared.module';
import { ProductDetailsPageModule } from 'src/app/product-details-page/product-details-page.module';


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, ProductDetailsPageModule],
      providers: []
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CarouselComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call nextSlide if button next was pressed', () => {
    const nextButton = fixture.debugElement.query(By.css('.arrow-right'));
    spyOn(component, 'nextSlide').and.callThrough();
    expect(nextButton).toBeDefined();
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.nextSlide).toHaveBeenCalled();
  });


  it('should call prevSlide if button prev was pressed', () => {
    const prevButton = fixture.debugElement.query(By.css('.arrow-left'));
    spyOn(component, 'prevSlide').and.callThrough();
    expect(prevButton).toBeDefined();
    prevButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.prevSlide).toHaveBeenCalled();
  });

  it('should call nextSlide and change counterScrolledItems', () => {
    const nextButton = fixture.debugElement.query(By.css('.arrow-right'));
    component.childrenLength = 4;
    component.counterScrolledItems = 3;
    const copyOfCounterScrolledItems = 3;
    spyOn(component, 'nextSlide').and.callThrough();
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.counterScrolledItems).not.toEqual(copyOfCounterScrolledItems);
  });

  it('should call prevSlide and change counterScrolledItems', () => {
    const nextButton = fixture.debugElement.query(By.css('.arrow-left'));
    component.counterScrolledItems = 5;
    const copyOfCounterScrolledItems = 5;
    component.itemsPerPage = 2;
    spyOn(component, 'prevSlide').and.callThrough();
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.counterScrolledItems).not.toEqual(copyOfCounterScrolledItems);
  });


});
