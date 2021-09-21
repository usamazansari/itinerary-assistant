import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import { TripListContainerComponent } from './trip-list-container.component';

import type { TripListDataModel } from '../../../imports/models';

import {
  TripListAssetsStub,
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub
} from '../../../constants';
import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '../../../models';
import { TripListService } from '../../../services';

describe('TripListContainerComponent', () => {
  let component: TripListContainerComponent;
  let fixture: ComponentFixture<TripListContainerComponent>;

  const serviceStub: Partial<TripListService> = {
    fetchAssets: (): void => { },
    watchAssets$: (): Observable<TripListAssetsModel> => of(TripListAssetsStub),
    fetchData: (): void => { },
    watchData$: (): Observable<TripListDataModel> => of(TripListDataStub),
    resetFlags: (): void => { },
    watchFlags$: (): Observable<TripListFlagModel> => of(TripListFlagStub),
    watchError$: (): Observable<TripListErrorModel> => of({ ...TripListErrorStub })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripListContainerComponent],
      providers: [
        { provide: TripListService, useValue: serviceStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
