import { TestBed } from '@angular/core/testing';

import { IaCoreService } from './ia-core.service';

describe('IaCoreService', () => {
  let service: IaCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
