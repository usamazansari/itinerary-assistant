import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTripViewContainerComponent } from './ia-trip-view-container.component';

describe('IaTripViewContainerComponent', () => {
  let component: IaTripViewContainerComponent;
  let fixture: ComponentFixture<IaTripViewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaTripViewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaTripViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
