import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOverviewListContainerComponent } from './trip-overview-list-container.component';

describe('TripOverviewListContainerComponent', () => {
  let component: TripOverviewListContainerComponent;
  let fixture: ComponentFixture<TripOverviewListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripOverviewListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOverviewListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
