import { TestBed } from '@angular/core/testing';

import { AppFirebaseService } from './app-firebase.service';

describe('AppFirebaseService', () => {
  let service: AppFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
