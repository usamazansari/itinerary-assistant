import { TestBed } from '@angular/core/testing';

import { IaTripViewService } from './ia-trip-view.service';

describe('IaTripViewService', () => {
  let service: IaTripViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaTripViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
