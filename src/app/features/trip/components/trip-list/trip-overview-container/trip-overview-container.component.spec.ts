import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOverviewContainerComponent } from './trip-overview-container.component';

describe('TripOverviewContainerComponent', () => {
  let component: TripOverviewContainerComponent;
  let fixture: ComponentFixture<TripOverviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripOverviewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
