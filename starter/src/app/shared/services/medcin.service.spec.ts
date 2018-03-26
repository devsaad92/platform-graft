import { TestBed, inject } from '@angular/core/testing';

import { MedcinService } from './medcin.service';

describe('MedcinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedcinService]
    });
  });

  it('should be created', inject([MedcinService], (service: MedcinService) => {
    expect(service).toBeTruthy();
  }));
});
