import { TestBed } from '@angular/core/testing';

import { KillswitchService } from './killswitch.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('KillswitchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: KillswitchService = TestBed.get(KillswitchService);
    expect(service).toBeTruthy();
  });

  it('should return promise', () => {
    const killswitchService: KillswitchService = TestBed.get(KillswitchService);
    const subject = killswitchService.loadConfig();
    const isPromise = typeof subject.then === 'function';
    expect(isPromise).toBe(true);
  });

  it('should return corect value of object', () => {
    const killswitches = {'key': 'false'};
    const killswitchService: KillswitchService = TestBed.get(KillswitchService);
    const resValue = killswitchService.getKillswitch(killswitches.key);
    expect(resValue).toBeFalsy();
  });
});
