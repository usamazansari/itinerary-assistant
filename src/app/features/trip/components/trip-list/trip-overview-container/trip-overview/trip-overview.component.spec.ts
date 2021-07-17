import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOverviewComponent } from './trip-overview.component';

describe('TripOverviewComponent', () => {
  let component: TripOverviewComponent;
  let fixture: ComponentFixture<TripOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
