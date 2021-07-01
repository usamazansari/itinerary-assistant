import { TestBed } from '@angular/core/testing';

import { IaTripCoreService } from './ia-trip-core.service';

describe('IaTripCoreService', () => {
  let service: IaTripCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaTripCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
