import { TestBed } from '@angular/core/testing';

import { CoreClipboardService } from './core-clipboard.service';

describe('IaCoreClipboardService', () => {
  let service: CoreClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
