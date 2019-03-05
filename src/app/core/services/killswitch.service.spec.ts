import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { KillswitchService } from './killswitch.service';

describe('KillswitchService', () => {
  beforeEach(() => {
    const fixture = '<div id="spinner"></div>';

    document.body.insertAdjacentHTML('afterbegin', fixture);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
  });

  it('should be created', () => {
    const service: KillswitchService = TestBed.get(KillswitchService);
    expect(service).toBeTruthy();
  });

  it('should return promise', () => {
    const killswitchService: KillswitchService = TestBed.get(KillswitchService);
    expect(killswitchService.loadConfig() instanceof Promise).toBe(true);
  });

  it('should return corect value of object', () => {
    const killswitchService: KillswitchService = TestBed.get(KillswitchService);
    killswitchService.killswitches = { 'wishListEnabled': true };
    expect(killswitchService.getKillswitch('wishListEnabled')).toBe(true);
  });
});
