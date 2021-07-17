import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOverviewListComponent } from './trip-overview-list.component';

describe('TripOverviewListComponent', () => {
  let component: TripOverviewListComponent;
  let fixture: ComponentFixture<TripOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripOverviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
