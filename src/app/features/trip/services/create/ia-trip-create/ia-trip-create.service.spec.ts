import { TestBed } from '@angular/core/testing';

import { IaTripCreateService } from './ia-trip-create.service';

describe('IaTripCreateService', () => {
  let service: IaTripCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaTripCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
