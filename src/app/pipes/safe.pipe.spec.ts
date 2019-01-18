import { SafePipe } from './safe.pipe';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { AdvertisingAreaComponent } from '../shared/components/advertising-area/advertising-area.component';

describe('Pipe: SafePipe', () => {
  const htmlSnippet = '<h1>text</h1><script>alert("abs")</script>';
  const component = AdvertisingAreaComponent;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [SafePipe, {
      provide: DomSanitizer,
      useValue: {
        sanitize: () => '<h1>text</h1>',
        bypassSecurityTrustHtml: () => '<h1>text</h1>'
      }
    }]
  }));

  it('pipe SafePipe should be created', () => {
    const pipe: SafePipe = TestBed.get(SafePipe);
    expect(pipe).toBeTruthy();
  });

  it('pipe SafePipe should transform html', () => {
    const pipe: SafePipe = TestBed.get(SafePipe);

    const safeResource = pipe.transform(htmlSnippet);

    expect(safeResource).toBe('<h1>text</h1>');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
