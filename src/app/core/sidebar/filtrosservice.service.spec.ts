import { TestBed } from '@angular/core/testing';

import { FiltrosserviceService } from './filtrosservice.service';

describe('FiltrosserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltrosserviceService = TestBed.get(FiltrosserviceService);
    expect(service).toBeTruthy();
  });
});
