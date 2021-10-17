import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import { TripListContainerComponent } from './trip-list-container.component';

import type { TripListDataModel } from '../../../imports/models';

import {
  TripListAssetsStub,
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub,
  TripListConstants as Constants
} from '../../../constants';
import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '../../../models';
import { TripListService } from '../../../services';

describe('TripListContainerComponent', () => {
  let component: TripListContainerComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TripListContainerComponent>;
  let service: TripListService;

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
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    service = debugEl.injector.get(TripListService);

    component.assets$ = of(TripListAssetsStub);
    component.data$ = of(TripListDataStub);
    component.error$ = of(TripListErrorStub);
    component.flags$ = of(TripListFlagStub);

    fixture.detectChanges();
  });

  afterEach(() => { fixture.destroy(); });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset flags on initialization', () => {
    const resetSpy = jest.spyOn(service, 'resetFlags');
    service.resetFlags();

    expect(resetSpy).toHaveBeenCalled();

    const watchSpy = jest.spyOn(service, 'watchFlags$');
    watchSpy.mockImplementation(() => of(TripListFlagStub));

    let flags;
    service.watchFlags$().subscribe(_ => { flags = _; });

    expect(flags).toEqual(TripListFlagStub);
  });

  it('should fetch the component assets', () => {
    const fetchSpy = jest.spyOn(service, 'fetchAssets');
    service.fetchAssets();

    expect(fetchSpy).toHaveBeenCalled();

    // const watchSpy = jest.spyOn(service, 'watchAssets$');
    // watchSpy.mockImplementation(() => of(Constants.assets));

    // let assets;
    // service.watchAssets$().subscribe(_ => { assets = _; });

    // expect(assets).toEqual(Constants.assets);
  });

  it('should fetch the component data', () => {
    const fetchSpy = jest.spyOn(service, 'fetchData');
    service.fetchData();

    expect(fetchSpy).toHaveBeenCalled();

    // const watchSpy = jest.spyOn(service, 'watchData$');
    // watchSpy.mockImplementation(() => of(TripListDataStub));

    // let data;
    // service.watchData$().subscribe(_ => { data = _; });

    // expect(data).toEqual(TripListDataStub);
  });
});
