import { TestBed } from '@angular/core/testing';

import { AppClipboardService } from './app-clipboard.service';

describe('AppClipboardService', () => {
  let service: AppClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
