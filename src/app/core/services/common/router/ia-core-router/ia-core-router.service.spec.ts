import { TestBed } from '@angular/core/testing';

import { IaCoreRouterService } from './ia-core-router.service';

describe('IaCoreRouterService', () => {
  let service: IaCoreRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
