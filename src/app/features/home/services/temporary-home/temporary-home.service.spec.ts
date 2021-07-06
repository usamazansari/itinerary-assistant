import { TestBed } from '@angular/core/testing';

import { TemporaryHomeService } from './temporary-home.service';

describe('TemporaryHomeService', () => {
  let service: TemporaryHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
