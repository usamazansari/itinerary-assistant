import { TestBed } from '@angular/core/testing';

import { IaCoreSidenavService } from './ia-core-sidenav.service';

describe('IaCoreSidenavService', () => {
  let service: IaCoreSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaCoreSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
