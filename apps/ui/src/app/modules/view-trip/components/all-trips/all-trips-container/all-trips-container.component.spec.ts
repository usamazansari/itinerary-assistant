import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripsContainerComponent } from './all-trips-container.component';

describe('AllTripsContainerComponent', () => {
  let component: AllTripsContainerComponent;
  let fixture: ComponentFixture<AllTripsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTripsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTripsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
