import { TestBed, inject } from '@angular/core/testing';

import { CourbeService } from './courbe.service';

describe('CourbeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourbeService]
    });
  });

  it('should be created', inject([CourbeService], (service: CourbeService) => {
    expect(service).toBeTruthy();
  }));
});
