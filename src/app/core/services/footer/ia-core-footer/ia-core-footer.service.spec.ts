import { TestBed } from '@angular/core/testing';

import { IaCoreFooterService } from './ia-core-footer.service';

describe('IaCoreFooterService', () => {
  let service: IaCoreFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
