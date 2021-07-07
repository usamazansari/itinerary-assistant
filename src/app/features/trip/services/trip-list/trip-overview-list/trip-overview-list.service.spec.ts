import { TestBed } from '@angular/core/testing';

import { TripOverviewListService } from './trip-overview-list.service';

describe('TripOverviewListService', () => {
  let service: TripOverviewListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripOverviewListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
