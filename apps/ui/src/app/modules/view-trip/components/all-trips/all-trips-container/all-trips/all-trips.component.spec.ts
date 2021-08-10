import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTripsComponent } from './all-trips.component';

describe('AllTripsComponent', () => {
  let component: AllTripsComponent;
  let fixture: ComponentFixture<AllTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
