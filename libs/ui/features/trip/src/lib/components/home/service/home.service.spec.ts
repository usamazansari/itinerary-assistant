/* eslint-disable @typescript-eslint/no-empty-function */
import { TestBed } from '@angular/core/testing';

import { RouterPayloadModel, RouterService } from '../imports';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  const routerStub: Partial<RouterService> = {
    navigate: (payload: RouterPayloadModel): void => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RouterService, useValue: routerStub }
      ]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
