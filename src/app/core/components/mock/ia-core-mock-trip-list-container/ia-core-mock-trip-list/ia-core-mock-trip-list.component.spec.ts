import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreMockTripListComponent } from './ia-core-mock-trip-list.component';

describe('IaCoreMockTripListComponent', () => {
  let component: IaCoreMockTripListComponent;
  let fixture: ComponentFixture<IaCoreMockTripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreMockTripListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreMockTripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
