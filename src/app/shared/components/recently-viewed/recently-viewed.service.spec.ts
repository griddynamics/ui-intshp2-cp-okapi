import { TestBed } from '@angular/core/testing';

import { RecentlyViewedService } from './recently-viewed.service';

describe('RecentlyViewedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentlyViewedService = TestBed.get(RecentlyViewedService);
    expect(service).toBeTruthy();
  });
});
