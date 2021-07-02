import { TestBed } from '@angular/core/testing';

import { CoreFirebaseService } from './core-firebase.service';

describe('IaCoreFirebaseService', () => {
  let service: CoreFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
