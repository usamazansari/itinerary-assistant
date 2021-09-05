import { TestBed } from '@angular/core/testing';

import { InlineLoaderService } from './inline-loader.service';

describe('LoaderService', () => {
  let service: InlineLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InlineLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
