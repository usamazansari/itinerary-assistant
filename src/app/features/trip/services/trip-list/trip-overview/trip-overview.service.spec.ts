import { TestBed } from '@angular/core/testing';

import { TripOverviewService } from './trip-overview.service';

describe('TripOverviewService', () => {
  let service: TripOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
