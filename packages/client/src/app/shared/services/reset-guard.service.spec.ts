import { TestBed, inject } from '@angular/core/testing';

import { ResetGuardService } from './reset-guard.service';

describe('ResetGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetGuardService]
    });
  });

  it('should be created', inject([ResetGuardService], (service: ResetGuardService) => {
    expect(service).toBeTruthy();
  }));
});
