import { TestBed } from '@angular/core/testing';

import { AppSnackbarService } from './app-snackbar.service';

describe('AppSnackbarService', () => {
  let service: AppSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
