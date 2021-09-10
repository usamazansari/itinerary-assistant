import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import { TripListContainerComponent } from './trip-list-container.component';

import type { TripListItemModel } from '../../../imports/models';
import { TripListItemStub } from '../../../imports/constants';

import { TripListErrorStub } from '../../../constants';
import type { TripListErrorModel } from '../../../models';
import { TripListService } from '../../../services';

describe('TripListContainerComponent', () => {
  let component: TripListContainerComponent;
  let fixture: ComponentFixture<TripListContainerComponent>;

  const serviceStub: Partial<TripListService> = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fetchTripList: (): void => { },
    watchTripList$: (): Observable<TripListItemModel[]> => of([TripListItemStub]),
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
