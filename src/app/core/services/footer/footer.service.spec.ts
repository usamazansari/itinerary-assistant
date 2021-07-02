import { TestBed } from '@angular/core/testing';

import { FooterService } from './footer.service';

describe('IaCoreFooterService', () => {
  let service: FooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
