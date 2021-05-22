import { TestBed } from '@angular/core/testing';

import { IaCoreNavbarService } from './ia-core-navbar.service';

describe('IaCoreNavbarService', () => {
  let service: IaCoreNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
