import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreMockTripListContainerComponent } from './ia-core-mock-trip-list-container.component';

describe('IaCoreMockTripListContainerComponent', () => {
  let component: CoreMockTripListContainerComponent;
  let fixture: ComponentFixture<CoreMockTripListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreMockTripListContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreMockTripListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
