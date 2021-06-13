import { TestBed } from '@angular/core/testing';

import { IaCoreHomeService } from './ia-core-home.service';

describe('IaHomeService', () => {
  let service: IaCoreHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
