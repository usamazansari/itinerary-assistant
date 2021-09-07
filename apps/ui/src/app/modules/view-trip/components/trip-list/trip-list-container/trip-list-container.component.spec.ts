import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import type { TripListItemModel } from '../../../imports/models';
import { tripListItemStub } from '../../../imports/constants';
import { TripListService } from '../../../services';

import { TripListContainerComponent } from './trip-list-container.component';

describe('TripListContainerComponent', () => {
  let component: TripListContainerComponent;
  let fixture: ComponentFixture<TripListContainerComponent>;

  const tripLIStub: TripListItemModel = { ...tripListItemStub };

  const serviceStub: Partial<TripListService> = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fetchTripList: (): void => { },
    watchTripList$: (): Observable<TripListItemModel[]> => of(
      [tripLIStub]
    )
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
