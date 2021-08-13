import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListContainerComponent } from './trip-list-container.component';

describe('TripListContainerComponent', () => {
  let component: TripListContainerComponent;
  let fixture: ComponentFixture<TripListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripListContainerComponent ]
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
