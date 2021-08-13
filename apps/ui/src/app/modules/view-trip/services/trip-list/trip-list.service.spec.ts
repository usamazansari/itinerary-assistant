import { TestBed } from '@angular/core/testing';

import { TripListService } from './trip-list.service';

describe('TripListService', () => {
  let service: TripListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
