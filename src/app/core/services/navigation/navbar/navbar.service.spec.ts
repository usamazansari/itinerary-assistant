import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar.service';

describe('IaCoreNavbarService', () => {
  let service: NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
