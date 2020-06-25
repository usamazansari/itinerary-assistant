import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNavbarContainerComponent } from './ia-navbar-container.component';

describe('IaNavbarContainerComponent', () => {
  let component: IaNavbarContainerComponent;
  let fixture: ComponentFixture<IaNavbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaNavbarContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
