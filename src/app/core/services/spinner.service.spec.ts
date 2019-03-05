import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  beforeEach(() => {
    const fixture = '<div id="spinner"></div>';

    document.body.insertAdjacentHTML('afterbegin', fixture);

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
  });

  it('should be created', () => {
    const service: SpinnerService = TestBed.get(SpinnerService);
    expect(service).toBeTruthy();
  });

  it('should hide spinner', fakeAsync(() => {
    const spinner = document.getElementById('spinner');
    const service: SpinnerService = TestBed.get(SpinnerService);
    service.hide();
    tick(200);
    expect(spinner.style.display).toEqual('none');
  }));

  it('should show spinner', () => {
    const spinner = document.getElementById('spinner');
    const service: SpinnerService = TestBed.get(SpinnerService);
    service.show();
    expect(spinner.style.display).toEqual('');
  });
});
