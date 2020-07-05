import { TestBed } from '@angular/core/testing';

import { IaNavbarService } from './ia-navbar.service';

describe('IaNavbarService', () => {
  let service: IaNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
