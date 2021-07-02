import { TestBed } from '@angular/core/testing';

import { CoreSnackbarService } from './core-snackbar.service';

describe('IaCoreSnackbarService', () => {
  let service: CoreSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
