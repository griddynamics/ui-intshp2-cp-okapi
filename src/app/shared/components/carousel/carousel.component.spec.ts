import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CarouselComponent],
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
    spyOn(component, 'nextSlide');
    expect(nextButton).toBeDefined();
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.nextSlide).toHaveBeenCalled();
  });

  it('should call prevSlide if button prev was pressed', () => {
    const prevButton = fixture.debugElement.query(By.css('.arrow-left'));
    spyOn(component, 'prevSlide');
    expect(prevButton).toBeDefined();
    prevButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.prevSlide).toHaveBeenCalled();
  });
});
