import { TestBed } from '@angular/core/testing';

import { AllTripsService } from './all-trips.service';

describe('AllTripsService', () => {
  let service: AllTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
