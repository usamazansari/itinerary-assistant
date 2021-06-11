import { TestBed } from '@angular/core/testing';

import { IaCoreClipboardService } from './ia-core-clipboard.service';

describe('IaCoreClipboardService', () => {
  let service: IaCoreClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
