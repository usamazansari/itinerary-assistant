import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarContainerComponent } from './navbar-container.component';

describe('AppNavbarContainerComponent', () => {
  let component: AppNavbarContainerComponent;
  let fixture: ComponentFixture<AppNavbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNavbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
