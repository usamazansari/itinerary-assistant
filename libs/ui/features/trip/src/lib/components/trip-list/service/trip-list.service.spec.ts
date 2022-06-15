import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { EndpointService } from '../../imports/services';

import { TripListService } from './trip-list.service';

describe('TripListService', () => {
  let service: TripListService;

  const endpointStub: Partial<EndpointService> = {
    get: <ResponseType>(): Observable<ResponseType> => of()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: EndpointService, useValue: endpointStub }]
    });
    service = TestBed.inject(TripListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
