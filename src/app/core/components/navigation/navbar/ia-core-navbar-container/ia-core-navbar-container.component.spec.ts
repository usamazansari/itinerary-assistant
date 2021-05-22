import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreNavbarContainerComponent } from './ia-core-navbar-container.component';

describe('IaCoreNavbarContainerComponent', () => {
  let component: IaCoreNavbarContainerComponent;
  let fixture: ComponentFixture<IaCoreNavbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreNavbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
