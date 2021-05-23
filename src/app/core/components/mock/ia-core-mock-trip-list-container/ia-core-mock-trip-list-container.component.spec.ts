import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreMockTripListContainerComponent } from './ia-core-mock-trip-list-container.component';

describe('IaCoreMockTripListContainerComponent', () => {
  let component: IaCoreMockTripListContainerComponent;
  let fixture: ComponentFixture<IaCoreMockTripListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreMockTripListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreMockTripListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
