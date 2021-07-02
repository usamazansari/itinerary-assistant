import { TestBed } from '@angular/core/testing';

import { CoreRouterService } from './core-router.service';

describe('IaCoreRouterService', () => {
  let service: CoreRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
