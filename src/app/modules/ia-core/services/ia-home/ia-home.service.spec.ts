import { TestBed } from '@angular/core/testing';

import { IaHomeService } from './ia-home.service';

describe('IaHomeService', () => {
  let service: IaHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
