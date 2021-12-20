import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListSkeletonComponent } from './trip-list-skeleton.component';

describe('TripListSkeletonComponent', () => {
  let component: TripListSkeletonComponent;
  let fixture: ComponentFixture<TripListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripListSkeletonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('TripListSkeletonComponent should be created', () => {
    expect(component).toBeDefined();
  });
});
