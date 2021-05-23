import { TestBed } from '@angular/core/testing';

import { IaCoreMockTripListService } from './ia-core-mock-trip-list.service';

describe('IaCoreMockTripListService', () => {
  let service: IaCoreMockTripListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreMockTripListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
