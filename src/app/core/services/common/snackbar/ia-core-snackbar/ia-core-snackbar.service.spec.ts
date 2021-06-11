import { TestBed } from '@angular/core/testing';

import { IaCoreSnackbarService } from './ia-core-snackbar.service';

describe('IaCoreSnackbarService', () => {
  let service: IaCoreSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
