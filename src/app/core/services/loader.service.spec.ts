import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(function() {
    const fixture = '<div id="spinner"></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });

  it('should hide spinner', () => {
    const spinner = document.getElementById('spinner');
    const service: LoaderService = TestBed.get(LoaderService);
    service.hideLoader();
    expect(spinner.style.display).toEqual('none');
  });

  it('should show spinner', () => {
    const spinner = document.getElementById('spinner');
    const service: LoaderService = TestBed.get(LoaderService);
    service.displayLoader();
    expect(spinner.style.display).toEqual('');
  });
});
